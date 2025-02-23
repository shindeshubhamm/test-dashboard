import { FC } from "react";

interface MoodSliderProps {
  value: number;
}

const MOOD_LEVELS = [
  { value: 0, emoji: "😢" },
  { value: 25, emoji: "😕" },
  { value: 50, emoji: "😐" },
  { value: 75, emoji: "🙂" },
  { value: 100, emoji: "😊" },
] as const;

const MoodSlider: FC<MoodSliderProps> = ({ value }) => {
  const getCurrentMood = (value: number) => {
    return MOOD_LEVELS.find((level) => level.value === value) || MOOD_LEVELS[2];
  };

  const currentMood = getCurrentMood(value);

  return (
    <div className="mood-slider">
      <div className="mood-slider__track">
        <div className="mood-slider__progress" style={{ width: `${value}%` }} />
        <div className="mood-slider__emoji" style={{ left: `${value}%` }}>
          {currentMood.emoji}
        </div>
      </div>
    </div>
  );
};

export default MoodSlider;
