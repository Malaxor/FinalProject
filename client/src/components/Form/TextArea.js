import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="15" {...props} />
  </div>;
