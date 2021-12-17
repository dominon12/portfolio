const baseURL = "http://127.0.0.1:8000/api/v1/";

export const URLS = {
  about: baseURL + "about/",
};

export async function performGET<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}