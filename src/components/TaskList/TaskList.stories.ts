import { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import * as TaskStories from "../Task/Task.stories";

const meta: Meta<typeof TaskList> = {
  title: "components/TaskList",
  component: TaskList,
  // decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  // TODO: decorators not working
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: false,
    tasks: [
      { ...TaskStories?.Default?.args?.task, id: "1", title: "Task 1" },
      { ...TaskStories?.Default?.args?.task, id: "2", title: "Task 2" },
      { ...TaskStories?.Default?.args?.task, id: "3", title: "Task 3" },
      { ...TaskStories?.Default?.args?.task, id: "4", title: "Task 4" },
      { ...TaskStories?.Default?.args?.task, id: "5", title: "Task 5" },
      { ...TaskStories?.Default?.args?.task, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default?.args?.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    tasks: [],
    loading: false,
  },
};
