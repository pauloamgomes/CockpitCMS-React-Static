import axios from "axios";
//
import * as Config from "./config";

export async function fetchCollection(collection) {
  return axios
    .post(
      `${Config.COCKPIT_HOST}/api/collections/get/${collection}?token=${
        Config.COCKPIT_API_TOKEN
      }`,
      {
        filter: {
          published: true,
        },
        populate: 1,
        simple: 1,
      }
    )
    .then(collection => collection.data)
    .catch(error => {
      console.error(error);
    });
}

export async function fetchSingleton(singleton) {
  return axios
    .get(
      `${Config.COCKPIT_HOST}/api/singletons/get/${singleton}?token=${
        Config.COCKPIT_API_TOKEN
      }`
    )
    .then(singletons => singletons.data);
}

export function fetchImageStyle(style, path) {
  if (!path.startsWith(Config.COCKPIT_UPLOADS_DIR)) {
    path = `${Config.COCKPIT_UPLOADS_DIR}${path}`;
  }

  return (
    (style &&
      axios.get(
        `${Config.COCKPIT_HOST}/api/imagestyles/style/${style}?token=${
          Config.COCKPIT_API_TOKEN
        }&src=${path}`
      )) ||
    `${Config.COCKPIT_HOST}/${path}`
  );
}

export async function submitForm(formName, values) {
  return axios
    .post(
      `${Config.COCKPIT_HOST}/api/forms/submit/${formName}?token=${
        Config.COCKPIT_FORMS_API_TOKEN
      }`,
      { form: values }
    )
    .then(response => response.status)
    .catch(error => {
      console.error(error);
      return false;
    });
}
