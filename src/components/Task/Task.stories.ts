import { Meta, StoryObj } from "@storybook/react";
import Task from "./Task";

const meta: Meta<typeof Task> = {
  title: "components/Task",
  component: Task,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Go for a walk",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default?.args?.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default?.args?.task,
      state: "TASK_ARCHIVED",
    },
  },
};
