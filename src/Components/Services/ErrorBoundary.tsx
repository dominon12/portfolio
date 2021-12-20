import React, { Component, ErrorInfo, ReactNode } from "react";
import { connect } from "react-redux";

import RuntimeError from "../Pages/RuntimeError";
import { reportError } from "../../Redux/Errors/Actions";
import { ReportErrorAction } from "../../Redux/Errors/Types";

interface StateProps {
  hasError: boolean;
}

interface DispatchProps {
  reportError: ReportErrorAction;
}

interface OwnProps {
  children: ReactNode;
}

type Props = DispatchProps & OwnProps;

/**
 * If come of it's children components didn't handle an error,
 * shows a 'RuntimeError' component and reports an error
 * via telegram bot service
 *
 * @class ErrorBoundary
 * @extends {Component<Props, State>}
 */
class ErrorBoundary extends Component<Props, StateProps> {
  public state: StateProps = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): StateProps {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.reportError(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <RuntimeError />;
    }

    return this.props.children;
  }
}

export default connect(null, { reportError })(ErrorBoundary);
