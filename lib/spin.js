import React from "react";
import { cx, css } from "emotion";
import Loading from "./loading";
const Spin = props => {
    const { loading, fullHeight, className, iconClassName, children } = props;
    return (React.createElement("div", { className: cx(styleSpin, fullHeight && styleFullHeight, className), "data-loading": loading },
        React.createElement("div", { className: styleSpinContent }, children),
        loading && React.createElement(Loading, { className: cx(styleLoading, iconClassName) })));
};
export default Spin;
const styleSpinContent = css `
  width: 100%;
  height: 100%;
`;
const styleSpin = css `
  position: relative;

  &[data-loading="true"] {
    .${styleSpinContent} {
      opacity: 0.5;
    }
    user-select: none;
    pointer-events: none;
  }
`;
const styleFullHeight = css `
  height: 100%;
`;
const styleLoading = css `
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -12px;
`;
//# sourceMappingURL=spin.js.map