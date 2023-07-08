import React from "react";
import { IChildrenNode } from "../../../types/interfaces";

function BlogLayout(props: IChildrenNode) {
  const { children } = props;

  return (
    <div className="container-fluid">
      <div className="blog-posts-area section-gap pt-5">
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  );
}

export default BlogLayout;