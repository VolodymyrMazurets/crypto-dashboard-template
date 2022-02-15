import { map } from "lodash";
import React, { FC } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./LineChartTemplate.module.css";

interface ILineChartProps {
  data: { [key: string]: number | string | undefined | false  }[];
}

export const LineChartTemplate: FC<ILineChartProps> = ({ data }) => {
  const gradientOffset = () => {
    const dataMax = Math.max(...map(data, (i) => i.value as number));
    const dataMin = Math.min(...map(data, (i) => i.value as number));
    if (dataMax <= 0) {
      return 0;
    } else if (dataMin >= 0) {
      return 1;
    } else {
      return dataMax / (dataMax - dataMin);
    }
  };

  const off = gradientOffset();

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p className={styles.label}>{label}</p>
          <p className={styles.value}>
            $ 76.72
            <span className={styles.subvalue}>{`(${payload[0].value}%)`}</span>
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ left: -32, top: 24, bottom: -10 }}>
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="#42AD87" />
            <stop offset={off} stopColor="#D03E5A" />
          </linearGradient>
        </defs>
        <defs>
          <filter id="shadow" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
            <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
            <feFlood
              floodColor="#42AD87"
              floodOpacity="0.8"
              result="offsetColor"
            />
            <feComposite
              in="offsetColor"
              in2="offsetBlur"
              operator="in"
              result="offsetBlur"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <CartesianGrid vertical={false} stroke="#22212D" />
        <XAxis
          dataKey="date"
          stroke="#22212D"
          tickCount={3}
          tick={{
            fill: "#474657",
            fontSize: 14,
            fontWeight: 400,
            strokeWidth: 0,
          }}
        />
        <YAxis
          strokeWidth={0}
          tick={{
            fill: "#474657",
            fontSize: 14,
            fontWeight: 400,
            strokeWidth: 0,
          }}
          padding={{ top: 0, bottom: 0 }}
        />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="url(#splitColor)"
          filter="url(#shadow)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "white",
            strokeWidth: 2,
            r: 3.5,
            fill: "transparent",
          }}
        />
        <Line
          type="monotone"
          dataKey="secondValue"
          stroke="#5F49D7"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "white",
            strokeWidth: 2,
            r: 3.5,
            fill: "transparent",
          }}
        />
        <Line
          type="monotone"
          dataKey="thirdValue"
          stroke="#5AB192"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "white",
            strokeWidth: 2,
            r: 3.5,
            fill: "transparent",
          }}
        />
        <Line
          type="monotone"
          dataKey="fourthValue"
          stroke="#373061"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "white",
            strokeWidth: 2,
            r: 3.5,
            fill: "transparent",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartTemplate;
