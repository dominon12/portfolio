/**
 * Contains functions of general use
 */

/**
 * Checks whether current device's width
 * is smaller of equal to 425 (is mobile device)
 *
 * @returns boolean value which indicates
 *          whether the current device is a mobile
 */
export function isMobile(): boolean {
  return document.body.offsetWidth <= 425;
}

/**
 * Returns window or 'scrollContainer'
 * based on device's width.
 *
 * That's necessary because when
 * the screen size is bigger than 425 pixels, container
 * which has to be scrolled is not the window.
 *
 * @export
 * @return {*}  {(Element
 *   | (Window & typeof globalThis)
 *   | null)}
 */
export function getScrollContainer():
  | Element
  | (Window & typeof globalThis)
  | null {
  if (isMobile()) return window;
  return document.querySelector("#scrollContainer");
}

/**
 * Scrolls a scroll container based
 * on passed settings.
 *
 * @param scrollOptions scroll settings for scrollTo method
 */
export function scrollTo(scrollOptions: ScrollToOptions) {
  getScrollContainer()?.scrollTo(scrollOptions);
}

/**
 * Generates a pseudo random number
 *
 * @returns random number from 0 to 1'000'000
 */
export function getRandomId() {
  return Math.floor(Math.random() * 1_000_000);
}

/**
 * Updates current url with search params
 *
 * @param history react history object
 * @param pathname url pathname
 * @param getParams url search params object
 */
export function updateUrlWithGetParams(
  history: any,
  pathname: string,
  getParams: URLSearchParams
) {
  history.push(`${pathname}?${getParams.toString()}`);
}

/**
 * Disables or enables possibility of scrolling
 * of the current main container.
 *
 * @export
 * @param {("hidden" | "auto")} value - desired behaviour
 */
export function setMainContainerScroll(value: "hidden" | "auto") {
  let container = isMobile()
    ? document.body
    : document.getElementById("scrollContainer");

  if (container) {
    container.style.overflowY = value;
  }
}
