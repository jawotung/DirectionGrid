import CustomGrid from "../../pages/Direction/CustomGrid";

const meta = {
  component: CustomGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "Plot of the grid based on the parameter",
      },
    },
  },
  argTypes: {
    x: { control: 'number', description: "This is the X-axis of the grid, showing how many items will be displayed." },
    y: { control: 'number', description: "This is the Y-axis of the grid, showing how many items will be displayed." },
    selectedGrid: { control: 'object', description: "Format: [number, number], To show the selected grid based on the array" },
    direction: { option: ["NORTH","SOUTH","EAST","WEST"], description: "Direction of icon" },
  },
  // args: {
  //   onchange: fn(),
  // },
};

export default meta;

export const SHOWLABEL = {
  args: {
    x: 5,
    y: 5,
    direction: "SOUTH",
    showLabel:true,
  },
  render: args => <CustomGrid {...args} />,
};

export const SOUTH = {
  args: {
    x: 5,
    y: 5,
    selectedGrid: [0, 0],
    direction: "SOUTH",
  },
  render: args => <CustomGrid {...args} />,
};

export const WEST = {
  args: {
    x: 5,
    y: 5,
    selectedGrid: [4, 4],
    direction: "WEST",
  },
  render: args => <CustomGrid {...args} />,
};

export const CustomNoGrid = {
  desc: "Custom grid configuration with 6 by 6.",
  args: {
    x: 6,
    y: 6,
    selectedGrid: [5, 5],
    direction: "EAST",
  },
  render: args => (
    <div>
      <div>{CustomNoGrid.desc}</div><br/> 
      <CustomGrid {...args} />
    </div>
  ),
};