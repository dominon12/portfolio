import React, { useEffect, useRef, useState } from "react";

interface ICoords {
  x: number;
  y: number;
}

type DirectionX = "left" | "right";
type DirectionY = "up" | "down";

interface IScrollPosition {
  current: ICoords;
  prev: ICoords;
  directionX: DirectionX;
  directionY: DirectionY;
}

/**
 * Give an access to user's current and previous
 * scroll positions with X and Y axises scroll
 * directions.
 *
 * @param {(props: IScrollPosition) => void} effect - Effect to run on scroll position changes
 * @param {Element} [container] - Container to track. Default - window
 * @return {*}  {null}
 */
function useScrollPosition(
  effect: (props: IScrollPosition) => void,
  container?: Element | Window | null
): null {
  const [scrollPosition, setScrollPosition] = useState<ICoords>({ x: 0, y: 0 });
  const prevScrollPosition = useRef(scrollPosition);

  /**
   * Returns current scroll position.
   *
   * @return {*}  {ICoords}
   */
  const getScrollPosition = (): ICoords => {
    let coords;

    if (container === window || !container) {
      coords = {
        x: window.scrollX,
        y: window.scrollY,
      };
    } else {
      coords = {
        x: (container as Element).scrollLeft,
        y: (container as Element).scrollTop,
      };
    }

    return coords;
  };

  /**
   * Updates state variables with the
   * actual scroll position data and runs
   * user's effect.
   */
  const scrollListener = () => {
    // scroll position
    const nextScrollPosition = getScrollPosition();
    setScrollPosition(nextScrollPosition);
    // prev scroll position
    const prevPosition = prevScrollPosition.current;
    // y axis
    const directionY = nextScrollPosition.y < prevPosition.y ? "up" : "down";
    // x axis
    const directionX = scrollPosition.x < prevPosition.x ? "left" : "right";
    // run user effect
    effect({
      current: nextScrollPosition,
      prev: prevScrollPosition.current,
      directionY,
      directionX,
    });
    // update prev scroll position
    prevScrollPosition.current = nextScrollPosition;
  };

  /**
   * Sets an event listener to scroll and
   * removes it in returned callback.
   */
  useEffect(() => {
    const scrollContainer = container || window;

    if (scrollContainer) {
      scrollListener();
      scrollContainer.addEventListener("scroll", scrollListener);
      return () =>
        scrollContainer.removeEventListener("scroll", scrollListener);
    }
  }, []);

  return null;
}

export default useScrollPosition;
