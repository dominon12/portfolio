/**
 * Contains functions of general use
 */

/**
 * Checks whether current device's width 
 * is smaller of equal to 425 (is mobile device)
 * 
 * @returns boolean value which indicates
 *          whether the current device is mobile
 */
export function isMobile(): boolean {
  return document.body.offsetWidth <= 425;
}

/**
 * Scrolls window or 'scrollContainer' depending on 
 * device's width. That's necessary because when
 * the screen size is bigger than 425 pixels, container 
 * which has to be scrolled is not the window.
 * 
 * @param scrollOptions scroll settings for scrollTo method
 */
export function scrollTo(scrollOptions: ScrollToOptions) {
  isMobile()
    ? window.scrollTo(scrollOptions)
    : document.getElementById("scrollContainer")?.scrollTo(scrollOptions);
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
