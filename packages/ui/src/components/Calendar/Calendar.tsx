import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

import "./index.css";

import { Header } from "./Header";
import { MonthCalendar } from "./MonthCalendar";
import { CalendarProps } from "./types";

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const { value, defaultValue, onChange, isDetail } = props;
  const [viewDate, setViewDate] = useState<Dayjs>(
    value || defaultValue || dayjs()
  );

  const [internalValue, setInternalValue] = useState<Dayjs | undefined>(
    defaultValue
  );

  const mergedValue = value !== undefined ? value : internalValue;

  useEffect(() => {
    if (value) {
      if (!value.isSame(viewDate, "month")) {
        setViewDate(value);
      }
    }
  }, [value, viewDate]);

  const handleDateSelect = (selectedDate: Dayjs) => {
    if (value === undefined) {
      setInternalValue(selectedDate);
      setViewDate(selectedDate);
    }
    onChange?.(selectedDate);
  };

  const handleMonthChange = (newMonth: Dayjs) => {
    setViewDate(newMonth);
  };

  return (
    <div className="calendar-container">
      <Header currentMonth={viewDate} onMonthChange={handleMonthChange} />
      <MonthCalendar
        displayMonth={viewDate}
        selectedValue={mergedValue}
        onSelectDate={handleDateSelect}
        isDetail={isDetail}
      />
    </div>
  );
};
