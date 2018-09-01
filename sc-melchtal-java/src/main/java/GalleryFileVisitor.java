import java.nio.file.FileVisitResult;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.List;

import static java.nio.file.FileVisitResult.CONTINUE;

public class GalleryFileVisitor extends SimpleFileVisitor<Path> {

    private List<Path> dataJsonFiles = new ArrayList<Path>();

    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attr) {
        //System.out.println("Filename: " + file.getFileName());
        if ("data.json".equals(file.getFileName().toString())) {
            System.out.println("Found data.json (" + file + ")");
            dataJsonFiles.add(file);
        }
        return CONTINUE;
    }

    public List<Path> getDataJsonFiles() {
        return dataJsonFiles;
    }
}
