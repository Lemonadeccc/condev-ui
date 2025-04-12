import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import dayjs, { Dayjs } from "dayjs";
import { Calendar } from "../components/Calendar";
// Import types for mock function parameters
import type {
  HeaderProps,
  MonthCalendarProps,
} from "../components/Calendar/types";

// Mock child components to isolate Calendar logic
vi.mock("../components/Calendar/Header", () => ({
  Header: ({ currentMonth, onMonthChange }: HeaderProps) => (
    <div>
      <button onClick={() => onMonthChange(currentMonth.subtract(1, "month"))}>
        Prev
      </button>
      <span>{currentMonth.format("YYYY-MM")}</span>
      <button onClick={() => onMonthChange(currentMonth.add(1, "month"))}>
        Next
      </button>
    </div>
  ),
}));

vi.mock("../components/Calendar/MonthCalendar", () => ({
  MonthCalendar: ({
    displayMonth,
    selectedValue,
    onSelectDate,
  }: MonthCalendarProps) => (
    <div>
      {/* Simulate some dates for selection */}
      <button onClick={() => onSelectDate(displayMonth.date(1))}>1</button>
      <button onClick={() => onSelectDate(displayMonth.date(15))}>15</button>
      {selectedValue && (
        <span>Selected: {selectedValue.format("YYYY-MM-DD")}</span>
      )}
    </div>
  ),
}));

describe("Calendar Component", () => {
  it("should render correctly with default props", () => {
    render(<Calendar />);
    // Check if header and month calendar parts are rendered (via mocks)
    expect(screen.getByText(dayjs().format("YYYY-MM"))).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument(); // From mocked MonthCalendar
    expect(screen.getByText("15")).toBeInTheDocument(); // From mocked MonthCalendar
  });

  it("should initialize with defaultValue", () => {
    const defaultValue = dayjs("2023-10-25");
    render(<Calendar defaultValue={defaultValue} />);
    // Header should show the month of defaultValue
    expect(screen.getByText("2023-10")).toBeInTheDocument();
    // MonthCalendar mock should show the selected value
    expect(screen.getByText("Selected: 2023-10-25")).toBeInTheDocument();
  });

  it("should initialize with value (controlled)", () => {
    const value = dayjs("2024-05-20");
    render(<Calendar value={value} />);
    expect(screen.getByText("2024-05")).toBeInTheDocument();
    expect(screen.getByText("Selected: 2024-05-20")).toBeInTheDocument();
  });

  it("should call onChange when a date is selected", () => {
    const handleChange = vi.fn();
    const initialDate = dayjs("2024-01-10");
    render(<Calendar onChange={handleChange} defaultValue={initialDate} />);

    // Simulate selecting the 15th day of the current month (January 2024)
    fireEvent.click(screen.getByText("15"));

    // Check if onChange was called with the correct date
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        $y: 2024,
        $M: 0, // Month is 0-indexed in dayjs
        $D: 15,
      })
    );

    // Check if the selected date display updates
    expect(screen.getByText("Selected: 2024-01-15")).toBeInTheDocument();
  });

  it("should not update selectedValue internally when controlled", () => {
    const handleChange = vi.fn();
    const controlledValue = dayjs("2024-03-10");
    // Render with value, simulating controlled component
    const { rerender } = render(
      <Calendar value={controlledValue} onChange={handleChange} />
    );

    // Display should reflect the controlled value
    expect(screen.getByText("2024-03")).toBeInTheDocument();
    expect(screen.getByText("Selected: 2024-03-10")).toBeInTheDocument();

    // Simulate clicking a different date (e.g., 1st) via the mock
    fireEvent.click(screen.getByText("1"));

    // onChange should be called
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        $y: 2024,
        $M: 2, // March
        $D: 1,
      })
    );
    screen.debug();

    // But the displayed selected value should NOT change yet, as it's controlled externally
    expect(screen.getByText("Selected: 2024-03-10")).toBeInTheDocument();

    // Simulate parent component updating the value prop based on onChange
    const newValue = dayjs("2024-03-01");
    rerender(<Calendar value={newValue} onChange={handleChange} />);

    // Now the display should update to the new controlled value
    expect(screen.getByText("Selected: 2024-03-01")).toBeInTheDocument();
    // Header month should still be March
    expect(screen.getByText("2024-03")).toBeInTheDocument();
  });

  it("should change displayed month when header navigation is clicked", () => {
    const initialDate = dayjs("2024-02-15");
    render(<Calendar defaultValue={initialDate} />);

    // Initial month should be February 2024
    expect(screen.getByText("2024-02")).toBeInTheDocument();

    // Click next month
    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText("2024-03")).toBeInTheDocument();
    // Selected value display should remain based on initial defaultValue
    expect(screen.getByText("Selected: 2024-02-15")).toBeInTheDocument();

    // Click previous month twice
    fireEvent.click(screen.getByText("Prev"));
    expect(screen.getByText("2024-02")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Prev"));
    expect(screen.getByText("2024-01")).toBeInTheDocument();
    // Selected value display should still remain
    expect(screen.getByText("Selected: 2024-02-15")).toBeInTheDocument();
  });
});
