import React, { FC } from "react";
import { ThemeContext } from "../../ThemeContext";

export const Title: FC = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <h1 className={`${theme}-accent title`}>{props.children}</h1>}
    </ThemeContext.Consumer>
  );
};
