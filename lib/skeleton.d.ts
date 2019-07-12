import React from "react";
import { widthUnit } from "./paragraph";
interface IProps {
    loading?: boolean;
    emptyData?: boolean;
    className?: string;
    style?: React.CSSProperties;
    rows?: number;
    width?: widthUnit | widthUnit[];
    active?: boolean;
    paragraphClassName?: string;
    fullHeight?: boolean;
    spinClassName?: string;
}
export declare const Skeleton: React.FC<IProps>;
export default Skeleton;
