import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useEffect,useState } from "react";

import { Header } from "./Header";
import { MonthCalendar } from "./MonthCalendar";
import { CalendarContainer } from "./styles";
import { CalendarProps } from "./types";

export const Calendar = (props: CalendarProps) => {
  const [viewDate, setViewDate] = useState<Dayjs>(
    props.value || props.defaultValue || dayjs()
  );

  // const [selectedValue, setSelectedValue] = useState<Dayjs | undefined>(
  //   props.value || props.defaultValue
  // );
  const [internalValue, setInternalValue] = useState<Dayjs | undefined>(
    props.defaultValue
  );

  const mergedValue = props.value !== undefined ? props.value : internalValue;

  useEffect(() => {
    if (props.value) {
      setViewDate(props.value);
    }
  }, [props.value]);

  // const handleDateSelect = (value: Dayjs) => {
  //   setSelectedValue(value);
  //   props.onChange?.(value);
  // };

  // const handleMonthChange = (value: Dayjs) => {
  //   setViewDate(value);
  // };

  const handleDateSelect = (value: Dayjs) => {
    // 修改: 仅在非受控模式下更新内部状态
    if (props.value === undefined) {
      setInternalValue(value);
      // 非受控模式下，也更新月份视图
      setViewDate(value);
    }
    // 始终调用 onChange
    props.onChange?.(value);
  };

  const handleMonthChange = (value: Dayjs) => {
    setViewDate(value);
  };

  return (
    <CalendarContainer>
      <Header currentMonth={viewDate} onMonthChange={handleMonthChange} />
      <MonthCalendar
        displayMonth={viewDate}
        selectedValue={mergedValue}
        onSelectDate={handleDateSelect}
        isDetail={props.isDetail}
      />
    </CalendarContainer>
  );
};
