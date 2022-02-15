import classNames from "classnames";
import React, { FC } from "react";
import ReactSlider from "react-slider";
import "./Slider.css";

interface ISliderProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}

export const Slider: FC<ISliderProps> = ({
  value,
  min = 1,
  max = 125,
  onChange,
}) => {
  return (
    <ReactSlider
      className="Slider"
      marks={[1, 25, 50, 75, 100, 125]}
      renderMark={(props) => {
        return (
          <div
            {...props}
            className={classNames("Slider__mark", {
              _active: Number(props?.key) <= value,
            })}
          >
            <span className="Slider__label">{props?.key}X</span>
          </div>
        );
      }}
      min={min}
      max={max}
      step={1}
      thumbClassName="Slider__thumb"
      onChange={onChange}
      trackClassName="Slider__track"
      value={value}
    />
  );
};

export default Slider;
