import React from "react";

import type { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { currentMonth, onMonthChange } = props;

  const handlePrevMonth = () => {
    if (currentMonth) {
      onMonthChange(currentMonth.subtract(1, "month"));
    }
  };

  const handleNextMonth = () => {
    if (currentMonth) {
      onMonthChange(currentMonth.add(1, "month"));
    }
  };

  return (
    <div className="calendar-header">
      <button
        type="button"
        className="calendar-arrow-button"
        onClick={handlePrevMonth}
        aria-label="Previous month"
      >
        &lt;
      </button>
      <div
        className="calendar-current-date"
        role="button"
        aria-live="polite"
        tabIndex={0}
      >
        {currentMonth?.format("YYYY年MM月")}
      </div>
      <button
        type="button"
        className="calendar-arrow-button"
        onClick={handleNextMonth}
        aria-label="Next month"
      >
        &gt;
      </button>
    </div>
  );
};
