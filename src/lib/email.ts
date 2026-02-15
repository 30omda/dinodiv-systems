import emailjs from "@emailjs/browser";

export const SERVICE_ID = "";
export const TEMPLATE_ID = "";
export const AUTO_REPLY_TEMPLATE_ID = "";
export const PUBLIC_KEY = "";

export const sendContactEmail = async (formData: Record<string, string>) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
};

export const sendAutoReply = async (formData: Record<string, string>) => {
  return emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, formData, PUBLIC_KEY);
};
