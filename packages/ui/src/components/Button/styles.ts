import styled, { css } from "styled-components";

import { ButtonProps } from "./types";

export const getSize = (size: string) => {
  switch (size) {
    case "small":
      return css`
        padding: 0 7px;
        font-size: 14px;
        border-radius: 4px;
      `;
    case "medium":
      return css`
        padding: 0 15px;
        font-size: 14px;
        border-radius: 4px;
      `;
    case "large":
      return css`
        height: 30px;
        padding: 0 15px;
        font-size: 16px;
        border-radius: 4px;
      `;
    default:
      return css`
        padding: 0 15px;
        font-size: 14px;
        border-radius: 4px;
      `;
  }
};

export const getVariant = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "filled":
      return css`
        background-color: #1890ff;
        color: #fff;

        &:hover {
          background-color: #40a9ff;
        }

        &:active {
          background-color: #096dd9;
        }
      `;
    case "light":
      return css`
        background-color: #f5f5f5;
        color: #333;

        &:hover {
          background-color: #e5e5e5;
        }

        &:active {
          background-color: #d5d5d5;
        }
      `;
    case "outline":
      return css`
        background-color: #fff;
        color: #1890ff;
        border: 1px solid #1890ff;

        &:hover {
          color: #40a9ff;
          background-color: #e5e5e5;
        }

        &:active {
          color: #096dd9;
          background-color: #d5d5d5;
        }
      `;
    case "transparent":
      return css`
        background-color: transparent;
        color: #1890ff;

        &:hover {
          background-color: #e5e5e5;
        }

        &:active {
          background-color: white;
        }
      `;
    case "danger":
      return css`
        background-color: #ff4d4f;
        color: #fff;

        &:hover {
          background-color: #ff7875;
        }

        &:active {
          background-color: #d83b3b;
        }
      `;
    default:
      return css`
        background-color: #1890ff;
        color: #fff;

        &:hover {
          background-color: #40a9ff;
        }

        &:active {
          background-color: #096dd9;
        }
      `;
  }
};

export const Button = styled.button<{
  size: ButtonProps["size"];
  variant: ButtonProps["variant"];
}>`
  border: none;
  display: inline-block;
  background-color: #1890ff;
  color: #fff;

  ${({ size = "medium" }) => getSize(size)}

  ${(props) => getVariant(props.variant)}
`;
