import classNames from "classnames";
import React, { FC } from "react";

export interface ToggleProps {
  onChange: () => void;
  value: boolean;
}

export const Toggle: FC<ToggleProps> = ({ onChange, value }) => {
  return (
    <div className="toggle" onClick={onChange}>
      <div className={classNames("toggle-ball", { "toggle-on": value }, { "toggle-off": !value })} />
    </div>
  );
};
