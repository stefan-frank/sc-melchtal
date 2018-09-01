public class ImageJson {

    private String name;
    private String date;
    private String dominantColor;
    private ImageDetailJson preview_xxs;
    private ImageDetailJson preview_xs;
    private ImageDetailJson preview_s;
    private ImageDetailJson preview_m;
    private ImageDetailJson preview_l;
    private ImageDetailJson preview_xl;
    private ImageDetailJson raw;

    public ImageDetailJson getPreview_xxs() {
        return preview_xxs;
    }

    public void setPreview_xxs(ImageDetailJson preview_xxs) {
        this.preview_xxs = preview_xxs;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;

    }

    public ImageDetailJson getPreview_xs() {
        return preview_xs;
    }

    public void setPreview_xs(ImageDetailJson preview_xs) {
        this.preview_xs = preview_xs;
    }

    public ImageDetailJson getPreview_s() {
        return preview_s;
    }

    public void setPreview_s(ImageDetailJson preview_s) {
        this.preview_s = preview_s;
    }

    public ImageDetailJson getPreview_m() {
        return preview_m;
    }

    public void setPreview_m(ImageDetailJson preview_m) {
        this.preview_m = preview_m;
    }

    public ImageDetailJson getPreview_l() {
        return preview_l;
    }

    public void setPreview_l(ImageDetailJson preview_l) {
        this.preview_l = preview_l;
    }

    public ImageDetailJson getPreview_xl() {
        return preview_xl;
    }

    public void setPreview_xl(ImageDetailJson preview_xl) {
        this.preview_xl = preview_xl;
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
