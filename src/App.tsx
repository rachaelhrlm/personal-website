import React, { FC, useContext } from "react";
import { GitHub, Linkedin } from "react-feather";
import Title from "./components/title";
import "./styles/index.scss";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

const App: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`App ${theme}-theme`}>
        <Title>Hello World,</Title>
        <h1 className={`subtitle`}>{`I'm Rachael.`}</h1>
        <p className="description">{`I'm an associate software developer at Sky. I started my coding journey through Sky's Get Into Tech program of 2020.`}</p>
        <div className={`${theme}-accent icons`}>
          <GitHub />
          <Linkedin />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
