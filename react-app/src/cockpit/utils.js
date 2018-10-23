import * as Config from "./config";

export function getImageStyleUrl(style, image) {
  if (image && image.styles !== undefined) {
    const img = image.styles.find(imgStyle => imgStyle.style === style);
    if (img && img.path) {
      if (Config.COCKPIT_LOCAL_IMAGES) {
        img.path = img.path.replace(
          Config.COCKPIT_HOST,
          Config.WEBSITE_BASE_PATH
        );
      }
      return img.path;
    }
  }
  if (
    image &&
    image.path &&
    !image.path.startsWith(Config.COCKPIT_UPLOADS_DIR)
  ) {
    if (Config.COCKPIT_LOCAL_IMAGES) {
      return `${Config.WEBSITE_BASE_PATH}/${Config.COCKPIT_UPLOADS_DIR}${
        image.path
      }`;
    }
    return `${Config.COCKPIT_HOST}/${Config.COCKPIT_UPLOADS_DIR}${image.path}`;
  }
}
