import React from "react";
import { render } from "enzyme";

import Loading from "../src/loading";

describe("Loading component", () => {
  it("toMatchSnapshot", () => {
    const wrapper = render(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
