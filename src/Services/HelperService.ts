export function isMobile() {
  return document.body.offsetWidth <= 425;
}

export function scrollTo(scrollOptions: ScrollToOptions) {
  isMobile()
    ? window.scrollTo(scrollOptions)
    : document.getElementById("scrollContainer")?.scrollTo(scrollOptions);
}
