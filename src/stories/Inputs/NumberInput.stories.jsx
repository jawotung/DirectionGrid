import { bool, string } from 'prop-types';
import NumberInput from '../../components/NumberInput';
// import { fn } from '@storybook/test';

const meta = {
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    size: {
      options: ['small', 'medium'],
    },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    maxAmount: { control: 'number' },
  },
  // args: {
  //   onchange: fn(),
  // },
};

export default meta;

export const Default = {};

export const Error = {
  args: {
    label: "Start Range",
    name: "startRange",
    value: 1,
    onChange: () => {},
    error:true,
    helperText:"This field is required",
  },
  render: args => <NumberInput {...args} />,
};
export const Disabled = {
  args: {
    label: "Start Range",
    name: "startRange",
    value: 1,
    onChange: () => {},
    disabled: true,
    size: "small",
  },
  render: args => <NumberInput {...args} />,
};