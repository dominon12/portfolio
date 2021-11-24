/**
 * Provides helper - functions to work
 * with telegram bot api
 */

import { ErrorInfo } from "react";
import {
  TELEGRAM_ADMIN_CHAT_ID,
  TELEGRAM_BOT_TOKEN,
} from "./CredentialsService";

/**
 * Sends a message to telegram bot's admin
 *
 * @param {string} message message to send
 * @return {*}  {Promise<boolean>} indicated whether the message has been successfully sent
 */
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

/**
 * Sends a message to telegram bot's admin using a
 * template, representing a new contact request
 *
 * @export
 * @param {string} name name of the person
 * @param {string} email email of the person
 * @param {string} [comment] comment of the person
 * @return {*}  {Promise<boolean>} indicated whether the message has been successfully sent
 */
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

/**
 * Sends a message with feedback from
 * user about an error which he encountered
 *
 * @export
 * @param {string} comment comment about the error
 * @return {*}  {Promise<boolean>} indicated whether the message has been successfully sent
 */
export async function submitErrorFeedback(comment: string): Promise<boolean> {
  const message = `<b>New Error Feedback</b>%0A%0A${comment}`;
  return await sendMessage(message);
}

/**
 * Sends a message to telegram bot's admin which
 * info about the error which has happened and details
 * about the user which has encountered the error
 *
 * @export
 * @param {Error} error Error object instance
 * @param {ErrorInfo} errorInfo ErrorInfo object instance
 * @return {*}  {Promise<boolean>} indicated whether the message has been successfully sent
 */
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
