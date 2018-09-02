public class ImageJson {

    private String name;
    private String date;
    private String dominantColor;
    private ImageDetailJson thumbnail;
    private ImageDetailJson image;
    private ImageDetailJson preview;

    public ImageDetailJson getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(ImageDetailJson thumbnail) {
        this.thumbnail = thumbnail;
    }

    public ImageDetailJson getImage() {
        return image;
    }

    public void setImage(ImageDetailJson image) {
        this.image = image;
    }

    public ImageDetailJson getPreview() {
        return preview;
    }

    public void setPreview(ImageDetailJson preview) {
        this.preview = preview;
    }

    private ImageDetailJson raw;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ImageDetailJson getRaw() {
        return raw;
    }

    public void setRaw(ImageDetailJson raw) {
        this.raw = raw;
    }

    public String getDominantColor() {
        return dominantColor;
    }

    public void setDominantColor(String dominantColor) {
        this.dominantColor = dominantColor;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
