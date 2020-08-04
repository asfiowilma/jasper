import React from "react"
import { storiesOf } from "@storybook/react"
import SmallNav from "."
import Card from "../Card"

const navItems_default = [
  {
    title: "navitem1",
    component: <Card title="Component1" text="Hello world, this is component1." />
  },
  {
    title: "navitem2",
    component: <Card title="Component2" text="This is component2, just to make sure you actually changed the state." />
  },
  {
    title: "navitem3",
    component: <Card title="Component3" text="Ooh, look! Another change" />
  },
  {
    title: "navitem4",
    component: <Card title="Component4" text="Lorem ipsum dolor sit amet" />
  }
]
storiesOf("SmallNav").add("Default", () => <SmallNav navItems={navItems_default} />)