import React, { ReactNode } from "react";
import { IBlogSidebar } from "../../../types/interfaces/IBlogSidebar";

function BlogSidebar(props: IBlogSidebar) {
    const { children } = props;

    return (
        <div className="col-lg-4 sidebar mt-10">
            {children}
        </div>
    );
}

export default BlogSidebar;
export { }