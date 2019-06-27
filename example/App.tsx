import React, { useState } from "react";
import { css } from "emotion";

import Skelenton from "../src";

interface IProps {}

export default function App(props: IProps) {
  return (
    <div className={styleApp}>
      <Skelenton />
    </div>
  );
}

const styleApp = css`
  text-align: center;
`;
