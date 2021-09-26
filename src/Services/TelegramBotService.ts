import {
  TELEGRAM_ADMIN_CHAT_ID,
  TELEGRAM_BOT_TOKEN,
} from "./CredentialsService";

export async function sendContactRequestMessage(
  name: string,
  email: string,
  comment?: string
): Promise<boolean> {
  let success = true;

  const message = `<b>New contact request</b>%0A%0A<b>From</b> ${name}%0A<b>Email</b> ${email}${
    comment && `%0A%0A${comment}`
  }`;

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
