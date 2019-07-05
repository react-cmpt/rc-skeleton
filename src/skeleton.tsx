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

  // Spin
  fullHeight?: boolean;
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
    fullHeight,
    children,
  } = props;

  if (loading && emptyData) {
    return (
      <div className={className} style={style}>
        <Paragraph rows={rows} width={width} />
      </div>
    );
  }

  return (
    <Spin loading={loading} fullHeight={fullHeight}>
      {children}
    </Spin>
  );
};

Skeleton.defaultProps = defaultProps;

export default Skeleton;
