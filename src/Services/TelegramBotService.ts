import { ErrorInfo } from "react";
import {
  TELEGRAM_ADMIN_CHAT_ID,
  TELEGRAM_BOT_TOKEN,
} from "./CredentialsService";

async function sendMessage(message: string): Promise<boolean> {
  let success = true;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_ADMIN_CHAT_ID}&parse_mode=HTML&text=${message}`
    );
    if (!res.ok) success = false;
  } catch (err) {
    success = false;
  }

  return success;
}

export async function sendContactRequestMessage(
  name: string,
  email: string,
  comment?: string
): Promise<boolean> {
  const message = `<b>New contact request</b>%0A%0A<b>From</b> ${name}%0A<b>Email</b> ${email}${
    comment && `%0A%0A${comment}`
  }`;
  return await sendMessage(message);
}

export async function submitErrorFeedback(comment: string): Promise<boolean> {
  const message = `<b>New Error Feedback</b>%0A%0A${comment}`;
  return await sendMessage(message);
}

export async function reportError(
  error: Error,
  errorInfo: ErrorInfo
): Promise<boolean> {
  const errorData = {
    name: error.name,
    message: error.message,
    url: document.location.href,
    userAgent: window.navigator.userAgent,
    // don't use data below
    componentStack: errorInfo.componentStack,
    stack: error.stack ?? "",
  };

  const message = `<b>${errorData.name}: ${errorData.message}</b>%0A%0A${errorData.url}%0A%0A${errorData.userAgent}`;

  return await sendMessage(message);
}
