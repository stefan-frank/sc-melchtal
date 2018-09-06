import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Gallery {
    private LocalDateTime date;
    private List<String> albumIds = new ArrayList<String>();

    public void setDate(LocalDateTime lowestDate) {
        this.date = lowestDate;
    }

    public String getYear() {
        return Integer.toString(date.getYear());
    }

    public List<String> getAlbumIds() {
        return this.albumIds;
    }
}
