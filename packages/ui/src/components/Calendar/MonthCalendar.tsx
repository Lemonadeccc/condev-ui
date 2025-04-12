import cn from "clsx";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import React from "react";

dayjs.extend(localeData);

import type { MonthCalendarProps, MonthType } from "./types";

function getAllDays(date: Dayjs): MonthType[] {
  const daysInMonth = date.daysInMonth();
  const startDate = date.startOf("month");
  const startDay = startDate.day();

  const days: MonthType[] = [];

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

  const totalCells = days.length <= 35 ? 35 : 42;
  const remaining = totalCells - days.length;
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
  const { displayMonth, selectedValue, onSelectDate } = props;

  const weekdays = dayjs.weekdaysMin();
  const firstDayOfWeek = dayjs.localeData().firstDayOfWeek();
  const sortedWeekdays = [
    ...weekdays.slice(firstDayOfWeek),
    ...weekdays.slice(0, firstDayOfWeek),
  ];

  const allDays = getAllDays(displayMonth);

  return (
    <div className="calendar-content" role="grid" aria-label="Month grid">
      {" "}
      <div role="row" className="contents">
        {" "}
        {sortedWeekdays.map((week) => (
          <div
            key={week}
            className="calendar-weekday"
            role="columnheader"
            aria-label={dayjs().day(weekdays.indexOf(week)).format("dddd")}
          >
            {" "}
            {week}
          </div>
        ))}
      </div>
      {allDays.map((day) => {
        const isCurrentMonth = day.currentMonth === "curr";
        const isToday = isCurrentMonth && day.date.isSame(dayjs(), "day");
        const isSelected =
          isCurrentMonth &&
          !!selectedValue &&
          day.date.isSame(selectedValue, "day");

        const cellClasses = cn("calendar-date-cell", {
          "calendar-date-cell-current":
            isCurrentMonth && !isSelected && !isToday,
          "calendar-date-cell-other-month": !isCurrentMonth,
          "calendar-date-cell-today": isToday && !isSelected,
          "calendar-date-cell-selected": isSelected,
        });

        return (
          <div
            key={day.date.toString()}
            className={cellClasses}
            role="gridcell"
            aria-selected={isSelected}
            aria-disabled={!isCurrentMonth}
            aria-label={day.date.format("YYYY-MM-DD")}
            onClick={() => {
              if (isCurrentMonth) {
                onSelectDate(day.date);
              }
            }}
            tabIndex={isCurrentMonth ? 0 : -1}
            onKeyDown={(e) => {
              if (isCurrentMonth && (e.key === "Enter" || e.key === " ")) {
                onSelectDate(day.date);
              }
            }}
          >
            {day.date.date()}
          </div>
        );
      })}
    </div>
  );
};
