import SelectInput from '../../components/SelectInput';

const meta = {
  component: SelectInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    options: { control: 'text' },
    error: { control: 'boolean' },
    size: {
      options: ['small', 'medium'],
    },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    square: { control: 'boolean' },
    disableClearable: { control: 'boolean' },
    placeholder: { control: 'text' },
    default1stData: { control: 'boolean' },
  },
  // args: {
  //   onchange: fn(),
  // },
};

export default meta;

export const Default = {};