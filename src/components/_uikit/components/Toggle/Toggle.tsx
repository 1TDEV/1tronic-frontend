import React from "react";
import StyledToggle, { Input, Handle, HandleText} from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, scale = scales.MD, text, forceTheme, ...props }) => {
  const isChecked = !!checked;
  return (
    <div>
      <StyledToggle checked={isChecked} scale={scale} forceTheme={forceTheme}>
        <Input checked={checked} scale={scale} forceTheme={forceTheme}{...props} type="checkbox" />
        <Handle scale={scale} forceTheme={forceTheme}/>
        <HandleText checked={checked} scale={scale} forceTheme={forceTheme}>{text}</HandleText>
      </StyledToggle>
    </div>
  );
};

Toggle.defaultProps = {
  scale: scales.MD,
  text: '',
};

export default Toggle;
