import { InputHTMLAttributes } from "react";

export type ToggleTheme = {
  handleBackground: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: Scales;
  checked?: boolean;
  text?: string;
  forceTheme?: string;
}

export interface HandleTextProps {
  scale: Scales;
  checked?: boolean;
  forceTheme?: string;
}
export interface HandleProps {
  scale: Scales;
  forceTheme?: string;
}

export interface InputProps {
  scale: Scales;
  forceTheme?: string;
}

export const scaleKeys = {
  handleHeight: "handleHeight",
  handleWidth: "handleWidth",
  handleLeft: "handleLeft",
  handleTop: "handleTop",
  checkedLeft: "checkedLeft",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
} as const;

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
