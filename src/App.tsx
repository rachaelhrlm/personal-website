import React, { FC, useState } from "react";
import { GitHub, Linkedin } from "react-feather";
import { Icon, SubTitle, Title, Text, Toggle } from "./components";
import "./styles/index.scss";
import { ThemeContext } from "./ThemeContext";

export type Theme = "dark" | "light";

const App: FC = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    isDarkTheme ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}-theme`}>
        <div className="portfolio">
          <Title>Hello World,</Title>
          <SubTitle>{`I'm Rachael.`}</SubTitle>
          <div className="app-description">
            <Text>{`I'm an associate software developer at Sky. I started my coding journey through Sky's Get Into Tech program of 2020.`}</Text>
          </div>
          <div className={`${theme}-accent app-icons`}>
            <Icon type={<GitHub />} href="https://github.com/rachaelhrlm" />
            <Icon type={<Linkedin />} href="https://www.linkedin.com/in/helen-rachael-malinowska-14b4581b4/" />
          </div>
          <Toggle value={isDarkTheme} onChange={() => toggleTheme()} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
