import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import saberHeadMain from "./svg/saberhead-main.svg";
import saberHeadMax from "./svg/saberhead-max.svg";
import saberGrip from "./svg/saber-grip.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${isMax ? saberHeadMax : saberHeadMain});
  background-size: cover;
  background-color: transparent;
  border: 0;
  cursor: ${getCursorStyle};
  width: 32px;
  height: 32px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-8px, 0px);
  transition: 200ms transform;

  &:hover {
    transform: ${disabled ? "scale(1) translate(-8px, 0px);" : "scale(1.5) translate(-4px, 0px);"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const SaberGrip = styled.div<DisabledProp>`
  background: url(${saberGrip}) no-repeat;
  height: 75px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 100px;
`;

export const SaberSlider = styled.div`
  position: absolute;
  left: 100px;
  width: calc(100% - 80px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<StyledInputProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 20px;
  position: absolute;
  top: 8px;
  border-radius: 0 8px 8px 0;
  box-shadow: inset 0px 0px 10px ${({ isMax }) => isMax ? `5px` : `2px`} ${({ theme }) => theme.colors.primary},
                    0px 0px 20px ${({ theme }) => theme.colors.secondary};
`;
