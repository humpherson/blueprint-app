// data/emotions.js
import emoji from "emoji-dictionary";

const emotions = [
  { label: "Happy", value: "happy", emoji: emoji.getUnicode("smile") },
  {
    label: "Neutral",
    value: "neutral",
    emoji: emoji.getUnicode("neutral_face"),
  },
  {
    label: "Frustrated",
    value: "frustrated",
    emoji: emoji.getUnicode("confounded"),
  },
  { label: "Confused", value: "confused", emoji: emoji.getUnicode("thinking") },
  { label: "Angry", value: "angry", emoji: emoji.getUnicode("angry") },
  { label: "Sad", value: "sad", emoji: emoji.getUnicode("cry") },
  {
    label: "Disappointed",
    value: "disappointed",
    emoji: emoji.getUnicode("disappointed"),
  },
  { label: "Unknown", value: "unknown", emoji: emoji.getUnicode("question") }, // Default fallback emoji
];

export default emotions;
