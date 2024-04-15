import { StoryObj, Meta } from "@storybook/react";
import ButtonComponent from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  title: "components/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    bgColor: "lightgrey",
  },
};
