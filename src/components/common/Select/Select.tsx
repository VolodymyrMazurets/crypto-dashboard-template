import React, { FC, RefCallback } from "react";
import ReactSelect, {
  components,
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  StylesConfig,
} from "react-select";
import { Icon, IconType } from "..";
import styles from "./Select.module.css";

export interface OptionInterface {
  readonly value: string;
  readonly label: string;
  readonly icon: IconType;
}

export const mockData: readonly OptionInterface[] = [
  { value: "binance", label: "Binance", icon: "Binance" },
  { value: "deribit", label: "Deribit", icon: "Deribit" },
  { value: "ftx", label: "FTX", icon: "FTX" },
];

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

const CustomOption = ({
  innerProps,
  innerRef,
  data,
}: {
  innerProps: JSX.IntrinsicElements["div"];
  innerRef: RefCallback<HTMLDivElement>;
  data: OptionInterface;
}) => (
  <div {...innerProps} ref={innerRef} className={styles.option}>
    <Icon name={data.icon} />
  </div>
);

const CustomControl = ({
  children,
  ...props
}: ControlProps<OptionInterface, false>) => {
  return <components.Control {...props}>{children}</components.Control>;
};

interface ISelectProps {
  label?: string;
}
export const Select: FC<ISelectProps> = ({ label }) => {
  return (
    <div>
      {label && <h4 className={styles.label}>{label}</h4>}
      <ReactSelect
        components={{
          IndicatorSeparator: () => null,
          Option: CustomOption,
          Control: CustomControl,
        }}
        options={mockData}
        styles={customStyles}
      />
    </div>
  );
};

export default Select;
