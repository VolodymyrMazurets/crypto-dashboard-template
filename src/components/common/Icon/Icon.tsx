import { CSSProperties, DOMAttributes, FC, FunctionComponent, memo, SVGProps } from 'react';
import * as iconComponents from './icons';
import { IconType } from './types';

export interface IconProps {
  className?: string;
  name: IconType;
  size?: number;
  fill?: string;
  style?: CSSProperties;
  onClick?: DOMAttributes<SVGSVGElement>['onClick'];
}

export const iconTestId = 'icon';

const getIconName = (name: IconType) => `Icon${name}`;

export const Icon: FC<IconProps> = memo(({ className, name, fill, size, style, onClick, ...rest }) => {
  const IconComponent =
    (iconComponents[getIconName(name) as keyof typeof iconComponents] as FunctionComponent<SVGProps<SVGSVGElement>>) ||
    null;

  return (
    IconComponent && (
      <IconComponent
        {...rest}
        onClick={onClick}
        data-testid={iconTestId}
        fill={fill}
        data-name={name}
        className={className}
        style={{ ...style, width: size, height: size }}
      />
    )
  );
});
