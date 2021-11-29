import React, { useRef } from "react";

import useScrollPosition from "./useScrollPosition";
import { getScrollContainer } from "../Services/HelperService";

/**
 * Applies css class when an element
 * appears in the viewport.
 *
 * @param {string} className - css class name to apply
 * @return {*}  {React.MutableRefObject<any>} - element ref
 */
function useAppearanceInViewport(
  className: string,
  offsetDeviation?: number
): React.MutableRefObject<any> {
  const elementRef = useRef<any>(null);

  /**
   * Tracks scroll event of an element
   * and adds passed css class.
   */
  useScrollPosition(() => {
    if (elementRef.current) {
      const screenHeight = window.innerHeight;
      const distanceToTop = elementRef.current.getBoundingClientRect().top;
      const elementBottom = distanceToTop + elementRef.current.offsetHeight;

      const shouldApplyAnimation =
        elementBottom - (offsetDeviation ?? 0) <= screenHeight &&
        !elementRef.current.classList.contains(className);

      if (shouldApplyAnimation) {
        elementRef.current.classList.add(className);
      }
    }
  }, getScrollContainer());

  return elementRef;
}

export default useAppearanceInViewport;
