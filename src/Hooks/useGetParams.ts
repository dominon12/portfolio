import { useLocation } from "react-router";

/**
 * Returns an instance of URLSearchParams initialized
 * with current document's url
 *
 * @return {*}
 */
const useGetParams = () => {
  return new URLSearchParams(useLocation().search);
};

export default useGetParams;
