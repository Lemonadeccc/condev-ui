import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #d5d5d5;
  }
`;

export const CurrentDate = styled.div`
  padding: 0 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #d5d5d5;
  }
`;

export const CalendarContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const WeekDay = styled.div`
  text-align: center;
  padding: 8px 0;
  font-weight: 500;
  color: #666;
  font-size: 14px;
`;

export const DateCell = styled.div<{
  isDetail?: boolean;
  isEmpty?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}>`
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #f5f5f5;
  }

  ${({ isEmpty }) =>
    isEmpty &&
    `
    color: gray;
    cursor: default;
  `}

  ${({ isToday }) =>
    isToday &&
    `
    color: #1890ff;
    background-color: #e6f7ff;
    font-weight: 500;

    &:hover{
      background-color: #e6f7ff;
    }
  `}

  ${({ isSelected }) =>
    isSelected &&
    `
    color: white;
    background-color: #1890ff;
    font-weight: 500;

    &:hover{
      background-color: #1890ff;
    }
  `}
`;
