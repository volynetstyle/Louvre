import React, { ReactNode } from "react";
import { IChildrenNode } from "../../../types/interfaces";

function BlogMainContent(props: IChildrenNode) {
    const { children } = props;

    return (
        <div className="col-lg-8 post-list blog-post-list">
            <div className="row">
                {children}
            </div>
        </div>
    );
}

export default BlogMainContent;