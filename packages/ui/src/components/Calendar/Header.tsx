import React from "react";

import { ArrowButton, CalendarHeader, CurrentDate } from "./styles";
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
    <CalendarHeader>
      <ArrowButton onClick={handlePrevMonth}>&lt;</ArrowButton>
      <CurrentDate>{currentMonth?.format("YYYY年MM月")}</CurrentDate>
      <ArrowButton onClick={handleNextMonth}>&gt;</ArrowButton>
    </CalendarHeader>
  );
};
