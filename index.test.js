import React from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";
import preloadAll from "./index";
import NextDynamicNested from "./test/NextDynamicNested";

beforeAll(async () => {
  await preloadAll();
});

it("renders nested next/dynamic components", () => {
  const wrapper = mount(<NextDynamicNested />);

  expect(wrapper).toBeTruthy();
});
