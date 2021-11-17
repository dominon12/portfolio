import { useLocation } from "react-router";

const useGetParams = () => {
  return new URLSearchParams(useLocation().search);
};

export default useGetParams;
