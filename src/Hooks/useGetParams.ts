import { useEffect, useState } from "react";
import { useLocation } from "react-router";

/**
 * Returns an instance of URLSearchParams initialized
 * with current document's get parameters
 *
 * @return {*}
 */
const useGetParams = () => {
  const { search } = useLocation();

  const getGetParams = () => new URLSearchParams(search);

  const [getParams, setGetParams] = useState<URLSearchParams>(getGetParams);

  useEffect(() => {
    const nextGetParams = getGetParams();
    setGetParams(nextGetParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return getParams;
};

export default useGetParams;
