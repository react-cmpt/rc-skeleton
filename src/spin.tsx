import React, { FC } from "react";
import { cx, css } from "emotion";

import Loading from "./loading";

interface IProps {
  loading?: boolean;
  fullHeight?: boolean;
  className?: string;
  iconClassName?: string;
}

const Spin: FC<IProps> = props => {
  const { loading, fullHeight, className, iconClassName, children } = props;
  return (
    <div
      className={cx(styleSpin, fullHeight && styleFullHeight, className)}
      data-loading={loading}
    >
      <div className={styleSpinContent}>{children}</div>
      {loading && <Loading className={cx(styleLoading, iconClassName)} />}
    </div>
  );
};

export default Spin;

const styleSpinContent = css`
  width: 100%;
  height: 100%;
`;

const styleSpin = css`
  position: relative;

  &[data-loading="true"] {
    .${styleSpinContent} {
      opacity: 0.5;
    }
    user-select: none;
    pointer-events: none;
  }
`;

const styleFullHeight = css`
  height: 100%;
`;

const styleLoading = css`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -12px;
`;
