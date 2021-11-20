import React, { FC, useState } from "react";
import { GitHub, Linkedin } from "react-feather";
import { SubTitle, Title, Text } from "./components";
import { Icon } from "./components/icon";
import "./styles/index.scss";
import { ThemeContext } from "./ThemeContext";

export type Theme = "dark" | "light";

const App: FC = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}-theme`}>
        <Title>Hello World,</Title>
        <SubTitle>{`I'm Rachael.`}</SubTitle>
        <div className="app-description">
          <Text>{`I'm an associate software developer at Sky. I started my coding journey through Sky's Get Into Tech program of 2020.`}</Text>
        </div>
        <div className={`${theme}-accent app-icons`}>
          <Icon type={<GitHub />} href="https://github.com/rachaelhrlm" />
          <Icon type={<Linkedin />} href="https://www.linkedin.com/in/helen-rachael-malinowska-14b4581b4/" />
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          toggleTheme();
        }}
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
};

export default App;
