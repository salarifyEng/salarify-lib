import axios from "axios";

export const sendSlackNotification = async (
  text: string,
  channel: string,
  slack: any,
  icon?: string
) => {
  await axios
    .post(slack.url, {
      channel,
      text,
      icon_emoji: icon || "🔥",
    })
    .catch((e) => console.error(e));
};
