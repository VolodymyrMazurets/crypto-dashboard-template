import React from "react";
import { components, ControlProps } from "react-select";
import { OptionInterface } from "..";

export const SelectCustomControl = ({
  children,
  ...props
}: ControlProps<OptionInterface, false>) => {
  return <components.Control {...props}>{children}</components.Control>;
};

export default SelectCustomControl;
