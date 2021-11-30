import { useEffect, useRef } from "react";

/**
 * Keeps previous value of passed 'value' param
 *
 * @template T
 * @param {T} value anything
 * @return {*}  {T} previous value
 */
function usePrevious<T>(value: T): T {
  const ref: any = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
