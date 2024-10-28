// components/section/CustomerEmotions.js
import React, { forwardRef } from "react";
import emotions from "../../../data/emotions";

// Function to get the emoji based on the emotion value
const getEmoji = (emotion) => {
  const foundEmotion = emotions.find(
    (item) => item.value === emotion.toLowerCase()
  );
  return foundEmotion
    ? foundEmotion.emoji
    : emotions.find((item) => item.value === "unknown").emoji;
};

// CustomerEmotions component
const CustomerEmotions = forwardRef(({ data, minHeight }, ref) => {
  const emotionEmoji = getEmoji(data);

  return (
    <div
      ref={ref}
      className="mb-4 p-4 border-2 border-orange-300 bg-orange-50 rounded-lg shadow-sm flex items-center justify-center"
      style={{ minHeight }}
    >
      <span className="text-4xl">{emotionEmoji}</span>
    </div>
  );
});

export default CustomerEmotions;
