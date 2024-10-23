export const fetchStrapi = async (endpoint, field) => {
  // Determine the base URL based on the execution context
  const isClient = typeof window !== "undefined"; // True if running in the browser
  const baseUrl = isClient
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL // Client-side URL
    : process.env.STRAPI_API_URL; // Server-side URL

  const testUrl = `${baseUrl}/api/${endpoint}`;
  console.log(isClient ? "--CLIENT - " : "--SERVER--", testUrl);

  const apiKey = isClient
    ? process.env.NEXT_PUBLIC_STRAPI_API_KEY // Client-side URL
    : process.env.STRAPI_API_KEY; // Server-side URL

  try {
    const res = await fetch(testUrl, {
      headers: {
        Authorization: "Bearer " + apiKey,
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
  const isClient = typeof window !== "undefined"; // True if running in the browser
  const baseUrl = isClient
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL // Client-side URL
    : process.env.STRAPI_API_URL; // Server-side URL

  const testUrl = `${baseUrl}/api/${endpoint}`;
  console.log(isClient ? "--CLIENT - " : "--SERVER--", testUrl);

  const apiKey = isClient
    ? process.env.NEXT_PUBLIC_STRAPI_API_KEY // Client-side URL
    : process.env.STRAPI_API_KEY; // Server-side URL

  try {
    const res = await fetch(testUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
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
