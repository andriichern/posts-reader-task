const GET = 'GET';
const POST = 'POST';
const CONTENT_TYPE = 'Content-Type';
const JSON_MIME = 'application/json';

const buildQueryParams = params => {
  const result = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    Array.isArray(value)
      ? value.map(item => result.append(key, item))
      : Boolean(value) && result.append(key, value);
  });

  return `?${result.toString()}`;
};

const buildRequest = request => {
  const { url, headers, method, query, body, credentials } = request;
  const options = { method: method || GET };

  credentials && (options.credentials = credentials);
  options.headers = {
    ...headers,
    [CONTENT_TYPE]: JSON_MIME,
  };

  if (body) {
    options.body = JSON.stringify(body);
    method || (options.method = POST);
  }

  const fetchParams = {
    url,
    options,
  };

  query && (fetchParams.url += buildQueryParams(query));

  return fetchParams;
};

const extractResponseData = async res => {
  try {
    return await res.json();
  } catch (err) {
    throw new Error(`Failed to parse response. ${err}`);
  }
};

export default async request => {
  let fetchRequest = buildRequest(request);

  try {
    let response = await fetch(fetchRequest.url, fetchRequest.options);
    let parsedResponse = await extractResponseData(response);

    if (response.ok) {
      return parsedResponse;
    } else {
      throw {
        status: response.status,
        message: response.statusText,
        response: parsedResponse,
      };
    }
  } catch (error) {
    throw {
      req: fetchRequest,
      response: error.res,
      status: error.status || 500,
      message: error.message || error.toString(),
    };
  }
};
