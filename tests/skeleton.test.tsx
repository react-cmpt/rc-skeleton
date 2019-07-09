import React from "react";
import { mount, shallow, render } from "enzyme";

import Skeleton from "../src/skeleton";

function Content() {
  return <div>hello</div>;
}

describe("Skeleton component", () => {
  it("render skeleton", () => {
    const wrapper = shallow(
      <Skeleton loading={true}>
        <Content />
      </Skeleton>
    );
    expect(wrapper.contains(<Content />)).toEqual(false);
  });

  it("render spin", () => {
    const wrapper = shallow(
      <Skeleton loading={true} emptyData={false}>
        <Content />
      </Skeleton>
    );
    expect(wrapper.contains(<Content />)).toEqual(true);
  });
});
