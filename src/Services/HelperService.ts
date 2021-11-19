export function isMobile() {
  return document.body.offsetWidth <= 425;
}

export function scrollTo(scrollOptions: ScrollToOptions) {
  isMobile()
    ? window.scrollTo(scrollOptions)
    : document.getElementById("scrollContainer")?.scrollTo(scrollOptions);
}

export function getRandomId() {
  return Math.floor(Math.random() * 1_000_000);
}


export function updateUrlWithGetParams(
  history: any,
  pathname: string,
  getParams: URLSearchParams
) {
  history.push(`${pathname}?${getParams.toString()}`);
}
