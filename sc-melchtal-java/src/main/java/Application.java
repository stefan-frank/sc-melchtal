import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Application {

    private static String PATH_TO_TEMPLATES = "sc-melchtal-java/src/main/resources/";
    private static String TS_SOURCE_GALLERY_DIRECTORY = "sc-melchtal-web/src/app/gallerie/2018/generated/";
    private static DateTimeFormatter df = DateTimeFormatter.ofPattern("yyyy:MM:dd HH:mm:ss");

    public static void main(String[] args) {
        try {
            Files.list(new File(TS_SOURCE_GALLERY_DIRECTORY).toPath()).forEach(file -> {
                try {
                    Files.delete(file);
                } catch (IOException e) {
                    Logger.getAnonymousLogger().log(Level.SEVERE, "Error", e);
                }
            });
            List<Album> albums = new ArrayList<Album>();

            Path startingDir = new File("sc-melchtal-gallery/src/assets/img/gallery").toPath();
            GalleryFileVisitor gfv = new GalleryFileVisitor();
            Files.walkFileTree(startingDir, gfv);

            List<Path> dataJsonFiles = gfv.getDataJsonFiles();
            for (Path dataJsonFile : dataJsonFiles) {
                InputStream is = new FileInputStream(dataJsonFile.toFile());
                ObjectMapper mapper = new ObjectMapper();
                List<ImageJson> imagesFromJson = mapper.readValue(is, new TypeReference<List<ImageJson>>() {
                });
                Album album = new Album();
                LocalDateTime lowestDate = convert(imagesFromJson, album);
                album.setTitle(extractTitle(dataJsonFile));
                album.setDate(lowestDate);
                albums.add(album);

                writeAlbum(album);
            }

            writeAlbumRegistry(albums);

        } catch (Exception e) {
            Logger.getAnonymousLogger().log(Level.SEVERE, "Error", e);
        }

    }

    private static String extractTitle(Path dataJsonFile) {
        String galleryDirectoryName = dataJsonFile.getParent().getFileName().toString();
        return galleryDirectoryName.substring(5).replaceAll("_", " ").replaceAll("-", "");
    }

    private static void writeAlbumRegistry(List<Album> albums) throws IOException {
        Velocity.init();
        VelocityContext albumRegistryContext = new VelocityContext();
        albumRegistryContext.put("albums", albums);
        Template templateRegistry = null;
        templateRegistry = Velocity.getTemplate(PATH_TO_TEMPLATES + "AlbumRegistry.vm");
        StringWriter sw2 = new StringWriter();
        FileWriter fw2 = new FileWriter(TS_SOURCE_GALLERY_DIRECTORY + "AlbumRegistry.ts");
        templateRegistry.merge(albumRegistryContext, fw2);
        fw2.close();
    }

    private static void writeAlbum(Album album) throws IOException {
        Velocity.init();
        VelocityContext albumContext = new VelocityContext();
        albumContext.put("album", album);
        Template template = null;
        template = Velocity.getTemplate(PATH_TO_TEMPLATES + "Album.vm");
        StringWriter sw = new StringWriter();
        FileWriter fw = new FileWriter(TS_SOURCE_GALLERY_DIRECTORY + album.getFilename());
        template.merge(albumContext, fw);
        fw.close();
    }

    private static LocalDateTime convert(List<ImageJson> imagesFromJson, Album album) throws ParseException {
        LocalDateTime lowestDate = LocalDateTime.now();
        List<Image> images = album.getImages();
        for (ImageJson source : imagesFromJson) {
            if (source.getDate() != null) {
                LocalDateTime date = LocalDateTime.parse(source.getDate(), df);
                if (date.isBefore(lowestDate)) {
                    lowestDate = date;
                }
            }
            Image target = new Image();
            target.setSmall(source.getPreview_xxs().getPath());
            target.setMedium(source.getPreview_xs().getPath());
            target.setBig(source.getPreview_m().getPath());
            images.add(target);
        }
        return lowestDate;
    }
}
