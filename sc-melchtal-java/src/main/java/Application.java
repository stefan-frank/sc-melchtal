import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Application {

    public static final String ASSETS_IMG_GALLERY = "sc-melchtal-gallery/src/assets/img/gallery/";
    private static String PATH_TO_TEMPLATES = "sc-melchtal-java/src/main/resources/";
    private static DateTimeFormatter df = DateTimeFormatter.ofPattern("yyyy:MM:dd HH:mm:ss");

    public static void main(String[] args) {
        try {
            Files.list(new File(ASSETS_IMG_GALLERY).toPath()).forEach(file -> {
                try {
                    if (file.startsWith("gallery") && file.endsWith(".json")) {
                        Logger.getAnonymousLogger().log(Level.INFO, "Deleting .." + file);
                        Files.delete(file);
                    }
                } catch (IOException e) {
                    Logger.getAnonymousLogger().log(Level.SEVERE, "Error", e);
                }
            });
            List<Gallery> galleries = new ArrayList<Gallery>();

            Path startingDir = new File(ASSETS_IMG_GALLERY).toPath();
            GalleryFileVisitor gfv = new GalleryFileVisitor();
            Files.walkFileTree(startingDir, gfv);

            Map<Integer, Gallery> galleryMap = new TreeMap<Integer, Gallery>(new Comparator<Integer>() {
                @Override
                public int compare(Integer integer, Integer t1) {
                    return t1.compareTo(integer);
                }
            });

            List<Path> dataJsonFiles = gfv.getDataJsonFiles();
            for (Path dataJsonFile : dataJsonFiles) {
                InputStream is = new FileInputStream(dataJsonFile.toFile());
                ObjectMapper mapper = new ObjectMapper();
                try {
                    List<ImageJson> imagesFromJson = mapper.readValue(is, new TypeReference<List<ImageJson>>() {
                    });
                    LocalDateTime lowestDate = convert(imagesFromJson, dataJsonFile.getParent().getFileName());
                    Integer year = Integer.valueOf(lowestDate.getYear());
                    Gallery galleryOfYear = galleryMap.get(year);
                    if (galleryOfYear == null) {
                        galleryOfYear = new Gallery();
                    }
                    galleryOfYear.getAlbumIds().add(extractTitle(dataJsonFile));
                    galleryOfYear.setDate(lowestDate);
                    galleryMap.put(year, galleryOfYear);

                    writeAlbum(galleryOfYear);
                } catch (Exception e) {
                    Logger.getAnonymousLogger().log(Level.SEVERE, "Error with file " + dataJsonFile, e);
                }

            }

            writeGalleryAllYears(galleryMap);

        } catch (Exception e) {
            Logger.getAnonymousLogger().log(Level.SEVERE, "Error", e);
        }

    }

    private static String extractTitle(Path dataJsonFile) {
        return dataJsonFile.getParent().getFileName().toString();
    }

    private static void writeGalleryAllYears(Map<Integer, Gallery> galleries) throws IOException {
        Velocity.init();
        VelocityContext albumRegistryContext = new VelocityContext();
        albumRegistryContext.put("galleries", galleries.values());
        Template templateRegistry = null;
        templateRegistry = Velocity.getTemplate(PATH_TO_TEMPLATES + "galleryYears.vm");
        StringWriter sw2 = new StringWriter();
        FileWriter fw2 = new FileWriter(ASSETS_IMG_GALLERY + "galleryYears.json");
        templateRegistry.merge(albumRegistryContext, fw2);
        fw2.close();
    }

    private static void writeAlbum(Gallery gallery) throws IOException {
        Velocity.init();
        VelocityContext albumContext = new VelocityContext();
        albumContext.put("gallery", gallery);
        Template template = null;
        template = Velocity.getTemplate(PATH_TO_TEMPLATES + "gallery-year.vm");
        StringWriter sw = new StringWriter();
        FileWriter fw = new FileWriter(ASSETS_IMG_GALLERY + "gallery-" + gallery.getYear() + ".json");
        template.merge(albumContext, fw);
        fw.close();
    }

    private static LocalDateTime convert(List<ImageJson> imagesFromJson, Path fileName) {
        LocalDateTime lowestDate = LocalDateTime.now();

        for (ImageJson source : imagesFromJson) {
            if (source.getDate() != null) {
                LocalDateTime date = LocalDateTime.parse(source.getDate(), df);
                if (date.isBefore(lowestDate)) {
                    lowestDate = date;
                }
            }
        }

        LocalDateTime yearFromDirectory = LocalDateTime.parse(fileName.toString().substring(0, 4) + ":01:01 00:00:00", df);

        lowestDate = yearFromDirectory.isBefore(lowestDate) ? yearFromDirectory : lowestDate;

        return lowestDate;
    }
}
