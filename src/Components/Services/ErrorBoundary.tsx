import React, { Component, ErrorInfo, ReactNode } from "react";

import { reportError } from "../../Services/TelegramBotService";
import RuntimeError from "../Pages/RuntimeError";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * If come of it's children components didn't handle an error,
 * shows a 'RuntimeError' component and reports an error
 * via telegram bot service
 *
 * @class ErrorBoundary
 * @extends {Component<Props, State>}
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportError(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <RuntimeError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
