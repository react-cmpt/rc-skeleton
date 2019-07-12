import React from "react";
import Spin from "./spin";
import Paragraph, { widthUnit } from "./paragraph";

interface IProps {
  loading?: boolean;
  emptyData?: boolean;
  className?: string;
  style?: React.CSSProperties;

  // Paragraph
  rows?: number;
  width?: widthUnit | widthUnit[];
  active?: boolean;
  paragraphClassName?: string;

  // Spin
  fullHeight?: boolean;
  spinClassName?: string;
}

const defaultProps: IProps = {
  emptyData: true,
};

export const Skeleton: React.FC<IProps> = props => {
  const {
    loading,
    emptyData,
    className,
    style,
    rows,
    width,
    active,
    paragraphClassName,
    fullHeight,
    spinClassName,
    children,
  } = props;

  if (loading && emptyData) {
    return (
      <div className={className} style={style}>
        <Paragraph
          rows={rows}
          width={width}
          active={active}
          className={paragraphClassName}
        />
      </div>
    );
  }

  return (
    <Spin loading={loading} fullHeight={fullHeight} className={spinClassName}>
      {children}
    </Spin>
  );
};

Skeleton.defaultProps = defaultProps;

export default Skeleton;
