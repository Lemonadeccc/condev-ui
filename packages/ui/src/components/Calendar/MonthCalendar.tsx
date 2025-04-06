import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import React from "react";

dayjs.extend(localeData);

import { CalendarContent, DateCell, WeekDay } from "./styles";
import type { MonthCalendarProps, MonthType } from "./types";

function getAllDays(date: Dayjs) {
  const daysInMonth = date.daysInMonth();
  const startDate = date.startOf("month");
  const startDay = startDate.day();

  const days: Array<MonthType> = [];

  const firstDayOfWeek = dayjs.localeData().firstDayOfWeek();
  let daysFromPrevMonth = startDay - firstDayOfWeek;
  if (daysFromPrevMonth < 0) {
    daysFromPrevMonth += 7;
  }

  for (let i = daysFromPrevMonth; i > 0; i--) {
    days.push({
      date: startDate.subtract(i, "day"),
      currentMonth: "prev",
    });
  }

  for (let i = 0; i < daysInMonth; i++) {
    days.push({
      date: startDate.add(i, "day"),
      currentMonth: "curr",
    });
  }

  const remaining = 42 - days.length;
  const endDate = date.endOf("month");
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: endDate.add(i, "day"),
      currentMonth: "next",
    });
  }

  return days;
}

export const MonthCalendar: React.FC<MonthCalendarProps> = (
  props: MonthCalendarProps
) => {
  const { displayMonth, selectedValue, onSelectDate, isDetail = false } = props;

  const weekdays = dayjs.weekdaysMin();
  const firstDayOfWeek = dayjs.localeData().firstDayOfWeek();
  const sortedWeekdays = [
    ...weekdays.slice(firstDayOfWeek),
    ...weekdays.slice(0, firstDayOfWeek),
  ];

  const allDays = getAllDays(displayMonth);

  return (
    <CalendarContent>
      {sortedWeekdays.map((week) => (
        <WeekDay key={week}>{week}</WeekDay>
      ))}
      {allDays.map((day) => (
        <DateCell
          key={`${day.currentMonth}-${day.date.toString()}`}
          isEmpty={day.currentMonth !== "curr"}
          isToday={day.date.isSame(dayjs(), "day")}
          isSelected={!!selectedValue && day.date.isSame(selectedValue, "day")}
          isDetail={isDetail}
          onClick={() => onSelectDate(day.date)}
        >
          {day.date.date()}
        </DateCell>
      ))}
    </CalendarContent>
  );
};
