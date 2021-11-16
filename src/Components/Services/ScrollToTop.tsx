import { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";

import { scrollTo } from "../../Services/HelperService";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => scrollTo({ top: 0, left: 0 }), [pathname]);

  return null;
};

export default withRouter(ScrollToTop);
