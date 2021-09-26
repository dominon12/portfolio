import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollContainer");
    scrollContainer?.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default withRouter(ScrollToTop);
