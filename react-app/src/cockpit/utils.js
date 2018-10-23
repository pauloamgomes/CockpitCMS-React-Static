import * as Config from "../config";

export function getImageStyleUrl(style, image) {
  let path = "";
  if (image && image.styles !== undefined) {
    const img = image.styles.find(imgStyle => imgStyle.style === style);
    if (img && img.path) {
      path = img.path;
    }
  }
  if (
    image &&
    image.path &&
    !image.path.startsWith(Config.COCKPIT_UPLOADS_DIR)
  ) {
    path = `/${Config.COCKPIT_UPLOADS_DIR}/${image.path}`;
  }

  return path.replace("//", "/");
}
