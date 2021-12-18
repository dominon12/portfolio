const baseURL = "http://127.0.0.1:8000/api/v1/";

export const URLS = {
  about: baseURL + "about/",
  projects: baseURL + "projects/",
  technologies: baseURL + "skills/",
  career: baseURL + "career/",
  languages: baseURL + "languages",
};

export async function performGET<T>(url: string, search?: string): Promise<T> {
  // form url
  let urlToFetch = new URL(url);
  if (search) urlToFetch.search = search;
  // make request
  const res = await fetch(urlToFetch.toString());
  const data = await res.json();
  return data;
}
