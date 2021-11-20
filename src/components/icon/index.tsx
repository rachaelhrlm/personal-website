import React, { FC, ReactElement } from "react";
import { ThemeContext } from "../../ThemeContext";

export interface IconProps {
  href?: string;
  type: ReactElement;
}

export const Icon: FC<IconProps> = ({ href, type }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <a href={href} className={`${theme}-accent icon`}>
          {type}
        </a>
      )}
    </ThemeContext.Consumer>
  );
};
