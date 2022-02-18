import React, { FC } from "react";
import ReactSelect, {
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  StylesConfig,
} from "react-select";
import { IconType } from "..";
import styles from "./Select.module.css";
import { SelectCustomOption } from "./SelectCustomOption";
import SelectCustomSingleValue from "./SelectCustomSingleValue/SelectCustomSingleValue";

export interface OptionInterface {
  value: string;
  label?: string;
  icon?: IconType;
}

const customStyles: StylesConfig<
  OptionInterface,
  boolean,
  GroupBase<OptionInterface>
> = {
  control: (
    provided: CSSObjectWithLabel,
    state: ControlProps<OptionInterface>
  ) => ({
    ...provided,
    background: "#252533",
    borderRadius: 8,
    borderColor: "#252533",
    height: 40,
    boxShadow: "none",
    color: "white",
    ":hover": {
      borderColor: "#252533",
    },
    ":focus": {
      borderColor: "#252533",
    },
  }),
  input: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "white",
    "::placeholder": {
      color: "#817F9B",
      fontSize: 14,
    },
  }),
  placeholder: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "#817F9B",
    fontSize: 14,
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "white",
    fontSize: 14,
  }),
  dropdownIndicator: (
    provided: CSSObjectWithLabel,
    state: DropdownIndicatorProps<OptionInterface>
  ) => ({
    ...provided,
    color: "#474657",
    transition: "0.3s ease transform",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : undefined,
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    background: "#252533",
    boxShadow: "0px 4px 32px rgba(14, 15, 19, 0.29)",
    borderRadius: 16,
  }),
  menuList: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: 24,
  }),
};
interface ISelectProps {
  label?: string;
  data: OptionInterface[];
  placeholder?: string;
}

export const Select: FC<ISelectProps> = ({
  label,
  data,
  placeholder = "Select",
}) => {
  return (
    <div>
      {label && <h4 className={styles.label}>{label}</h4>}
      <ReactSelect
        components={{
          IndicatorSeparator: () => null,
          Option: SelectCustomOption,
          SingleValue: SelectCustomSingleValue,
        }}
        options={data}
        styles={customStyles}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Select;
