import React, { CSSProperties } from "react";
import { css, cx } from "emotion";

export type widthUnit = string | number;

export function ParagraphItem(props: {
  width?: widthUnit;
  active?: boolean;
  className?: string;
}) {
  const { width, active, className } = props;
  return (
    <div
      className={cx(
        styleParagraphItem,
        active && styleKeyframesLoading,
        className
      )}
      style={{ width }}
    />
  );
}

interface IProps {
  active?: boolean;
  rows?: number;
  width?: widthUnit | widthUnit[];
  className?: string;
  style?: CSSProperties;
  itemClassName?: string;
}

const defaultProps: IProps = {
  rows: 3,
  active: true,
};

function Paragraph(props: IProps) {
  const { active, rows, width, className, style, itemClassName } = props;
  const widthsLength = Array.isArray(width) ? width.length : rows;
  const widths = Array.isArray(width)
    ? [...Array(widthsLength)].map((i, index) => width[index])
    : [...Array(widthsLength)].map(i => width);

  return (
    <div className={className} style={style}>
      {widths.map((w, index) => (
        <ParagraphItem
          key={index}
          width={w}
          active={active}
          className={itemClassName}
        />
      ))}
    </div>
  );
}

Paragraph.defaultProps = defaultProps;

export default Paragraph;

const styleKeyframesLoading = css`
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

const styleParagraphItem = css`
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  width: 100%;
  height: 1em;
  margin-top: 0.5em;

  &:first-of-type {
    margin-top: 0;
  }
`;
