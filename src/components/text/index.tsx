import React, { FC } from "react";

export const Text: FC = props => {
  return <p className="text">{props.children}</p>;
};
