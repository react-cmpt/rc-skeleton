import { CSSProperties } from "react";
export declare type widthUnit = string | number;
export declare function ParagraphItem(props: {
    width?: widthUnit;
    active?: boolean;
    className?: string;
}): JSX.Element;
interface IProps {
    active?: boolean;
    rows?: number;
    width?: widthUnit | widthUnit[];
    className?: string;
    style?: CSSProperties;
    itemClassName?: string;
}
declare function Paragraph(props: IProps): JSX.Element;
declare namespace Paragraph {
    var defaultProps: IProps;
}
export default Paragraph;
