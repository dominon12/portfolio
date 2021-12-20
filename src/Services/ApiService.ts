// const baseURL = "http://127.0.0.1:8000/api/v1/";
const baseURL = "https:/dominon12.space/api/v1/";

export const URLS = {
  about: baseURL + "about/",
  projects: baseURL + "projects/",
  technologies: baseURL + "skills/",
  career: baseURL + "career/",
  languages: baseURL + "languages/",
  donations: baseURL + "donations/",
  contact: baseURL + "contact/",
};

/**
 * Sends GET request to a specified url
 *
 * @export
 * @template T - return type
 * @param {string} url
 * @param {string} [search] - url search params string
 * @return {*}  {Promise<T>}
 */
export async function performGET<T>(url: string, search?: string): Promise<T> {
  // form url
  let urlToFetch = new URL(url);
  if (search) urlToFetch.search = search;
  // make request
  const res = await fetch(urlToFetch.toString());
  const data: T = await res.json();
  return data;
}

/**
 * Sends POST request to a specified url
 * with specified body
 *
 * @export
 * @template T
 * @param {string} url
 * @param {*} body
 * @return {*}  {Promise<T>}
 */
export async function performPOST<T>(url: string, body: any): Promise<T> {
  let urlToFetch = new URL(url);
  const res = await fetch(urlToFetch.toString(), {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data: T = await res.json();
  return data;
}
