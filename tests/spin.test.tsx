import React from "react";
import { render } from "enzyme";

import Spin from "../src/spin";

describe("Spin component", () => {
  it("loading snapshot", () => {
    const wrapper = render(<Spin loading={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
