import React from "react";
import { mount, shallow, render } from "enzyme";

import Paragraph, { ParagraphItem } from "../src/paragraph";

describe("Paragraph component", () => {
  it("renders default <ParagraphItem /> components", () => {
    const wrapper = shallow(<Paragraph />);
    expect(wrapper.find(ParagraphItem)).toHaveLength(3);
  });

  it("rows: 2 <ParagraphItem /> components", () => {
    const wrapper = shallow(<Paragraph rows={2} />);
    expect(wrapper.find(ParagraphItem)).toHaveLength(2);
  });

  it("width: 2 <ParagraphItem /> components", () => {
    const wrapper = shallow(<Paragraph width={[100, 200]} />);
    expect(wrapper.find(ParagraphItem)).toHaveLength(2);
  });

  it("width: <ParagraphItem /> width", () => {
    const wrapper = mount(<Paragraph width={[100, 200, 300, 400]} />);
    expect(
      wrapper.find(ParagraphItem).find({ style: { width: 100 } })
    ).toHaveLength(1);
    expect(
      wrapper.find(ParagraphItem).find({ style: { width: 200 } })
    ).toHaveLength(1);
  });

  it("width: Snapshot", () => {
    const wrapper = render(<Paragraph width={[100, 200, 300, 400]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("active: Snapshot", () => {
    const wrapper = render(<Paragraph active={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("ParagraphItem component", () => {
  it("width: 100", () => {
    const wrapper = mount(<ParagraphItem width={200} />);
    expect(wrapper.find({ style: { width: 200 } })).toHaveLength(1);
  });
});
