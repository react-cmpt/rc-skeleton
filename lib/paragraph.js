import React from "react";
import { css, cx } from "emotion";
export function ParagraphItem(props) {
    const { width, active, className } = props;
    return (React.createElement("div", { className: cx(styleParagraphItem, active && styleKeyframesLoading, className), style: { width } }));
}
const defaultProps = {
    rows: 3,
    active: true,
};
function Paragraph(props) {
    const { active, rows, width, className, style, itemClassName } = props;
    const widthsLength = Array.isArray(width) ? width.length : rows;
    const widths = Array.isArray(width)
        ? [...Array(widthsLength)].map((i, index) => width[index])
        : [...Array(widthsLength)].map(i => width);
    return (React.createElement("div", { className: className, style: style }, widths.map((w, index) => (React.createElement(ParagraphItem, { key: index, width: w, active: active, className: itemClassName })))));
}
Paragraph.defaultProps = defaultProps;
export default Paragraph;
const styleKeyframesLoading = css `
  @keyframes loadingActive {
    from {
      background-position: 100% 50%;
    }
    to {
      background-position: 0 50%;
    }
  }

  animation: loadingActive 1.5s ease infinite;
`;
const styleParagraphItem = css `
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  width: 100%;
  height: 1em;
  margin-top: 0.5em;

  &:first-of-type {
    margin-top: 0;
  }
`;
//# sourceMappingURL=paragraph.js.map