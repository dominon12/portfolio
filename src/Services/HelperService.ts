export function isMobile() {
  return document.body.offsetWidth <= 425;
}

export function scrollToTop() {
  const scrollOptions: ScrollToOptions = {
    top: 0,
    left: 0,
  };

  isMobile()
    ? window.scrollTo(scrollOptions)
    : document.getElementById("scrollContainer")?.scrollTo(scrollOptions);
}
