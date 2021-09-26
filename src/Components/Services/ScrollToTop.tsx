import { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";

import { scrollToTop } from "../../Services/HelperService";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => scrollToTop(), [pathname]);

  return null;
};

export default withRouter(ScrollToTop);
