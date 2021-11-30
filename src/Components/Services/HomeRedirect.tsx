import React, { useEffect } from "react";
import { useHistory } from "react-router";

interface Props {}

/**
 * Redirects user to the About page
 */
const HomeRedirect: React.FC = (props: Props) => {
  const history = useHistory();

  useEffect(() => history.push("/about"), []);

  return null;
};

export default HomeRedirect;
