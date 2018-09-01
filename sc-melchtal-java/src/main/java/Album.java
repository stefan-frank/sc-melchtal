import java.time.LocalDateTime;
import java.time.temporal.ChronoField;
import java.util.ArrayList;
import java.util.List;

public class Album {
    private String title;
    private String filename;
    private String classname;
    private LocalDateTime date;
    private List<Image> images = new ArrayList<Image>();

    public String getFilename() {
        return getClassname() + ".ts";
    }

    public String getClassname() {
        return "Album" + date.get(ChronoField.YEAR) + title.replaceAll(" ", "");
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public List<Image> getImages() {
        return images;
    }

}
