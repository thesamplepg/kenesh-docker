export const fetchStrapi = async (endpoint, field) => {
  const baseUrl =
    process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const apiKey =
    process.env.NEXT_PUBLIC_STRAPI_API_KEY || process.env.STRAPI_API_KEY;

  console.log("NEXT_PUBLIC - ", process.env.NEXT_PUBLIC_STRAPI_API_URL);
  console.log("ENV - ", process.env.STRAPI_API_URL);

  const auth = "Bearer " + apiKey;

  try {
    const res = await fetch(baseUrl + `/api/${endpoint}`, {
      headers: {
        Authorization: auth,
      },
    });

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const isValid = isDataValid(data, field);

    return isValid ? data : false;
  } catch (error) {
    console.log(error);
  }
};

export const postStrapi = async (endpoint, data) => {
  const baseUrl =
    process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const apiKey =
    process.env.NEXT_PUBLIC_STRAPI_API_KEY || process.env.STRAPI_API_KEY;

  const auth = "Bearer " + apiKey;

  try {
    const res = await fetch(baseUrl + `/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify(data),
    });

    return res;
  } catch (error) {}
};

const isDataValid = (dataObj, field) => {
  if (!dataObj.data || (Array.isArray(dataObj.data) && !dataObj.data.length)) {
    return false;
  } else if (!field) {
    return true;
  }

  const fieldData = dataObj.data.attributes[field];

  if (!fieldData || !fieldData.data) {
    return false;
  } else if (!fieldData.data.length && !Object.keys(fieldData.data).length) {
    return false;
  }

  return true;
};
