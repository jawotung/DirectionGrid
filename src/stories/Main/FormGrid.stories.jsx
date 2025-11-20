import FormGrid from "../../pages/Direction/FormGrid";


const meta = {
  component: FormGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "Form Inputs and Validation",
      },
    },
  },
  argTypes: {
    x: { 
      control: 'number', 
      description: "This is the X-axis of the grid, showing how many items will be displayed." 
    },
    y: { 
      control: 'number', 
      description: "This is the Y-axis of the grid, showing how many items will be displayed." 
    },
    formData: {
      control: 'object',
      description: "Form data including startRange, endRange, and direction"
    }
  },
};

export default meta;

export const Default = {
  args: {
    x: 5,
    y: 5,
    formData:{
        startRange: "",
        endRange: "",
        direction: "",
    }
  },
  render: args => <FormGrid {...args} />,
};