import React, { FC, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Title: FC = props => {
  const { theme } = useContext(ThemeContext);
  return <h1 className={`${theme}-accent title`}>{props.children}</h1>;
};

export default Title;
