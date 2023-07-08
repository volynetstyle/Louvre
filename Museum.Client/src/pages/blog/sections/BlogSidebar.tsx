import React, { ReactNode } from "react";
import { IChildrenNode } from "../../../types/interfaces";

function BlogSidebar(props: IChildrenNode) {
    const { children } = props;

    return (
        <div className="col-lg-4 sidebar mt-10">
            {children}
        </div>
    );
}

export default BlogSidebar;