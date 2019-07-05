import React, { useState } from "react";
import { css } from "emotion";

import Skelenton from "../src";

interface IProps {}

export default function App(props: IProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);

  return (
    <div className={styleApp}>
      <button onClick={() => setLoading(!loading)}>
        loading: {`${loading}`}
      </button>
      <button onClick={() => (data.length > 0 ? setData([]) : setData(["a"]))}>
        data: [{data.join(",")}]
      </button>
      <br />
      <br />
      <Skelenton loading={loading} emptyData={data.length <= 0}>
        <div>render</div>
      </Skelenton>
      <br />
    </div>
  );
}

const styleApp = css`
  text-align: center;
`;
