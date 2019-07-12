import React from "react";
import Spin from "./spin";
import Paragraph from "./paragraph";
const defaultProps = {
    emptyData: true,
};
export const Skeleton = props => {
    const { loading, emptyData, className, style, rows, width, active, paragraphClassName, fullHeight, spinClassName, children, } = props;
    if (loading && emptyData) {
        return (React.createElement("div", { className: className, style: style },
            React.createElement(Paragraph, { rows: rows, width: width, active: active, className: paragraphClassName })));
    }
    return (React.createElement(Spin, { loading: loading, fullHeight: fullHeight, className: spinClassName }, children));
};
Skeleton.defaultProps = defaultProps;
export default Skeleton;
//# sourceMappingURL=skeleton.js.map