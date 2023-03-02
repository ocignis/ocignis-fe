import { Delete as DeleteIcon } from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  component: Button,
  title: 'Button/Outlined',
} as Meta;

const base: ButtonProps = {
  children: 'Click Me',
  variant: 'outlined',
  onClick: action('onClick'),
};

const Template: Story<ButtonProps> = (args) => <Button {...base} {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
const DisabledArgs: ButtonProps = {
  ...base,
  disabled: true,
};
Disabled.args = DisabledArgs;

export const TextIcon = Template.bind({});
const TextIconArgs: ButtonProps = {
  ...base,
  icon: <DeleteIcon />,
};
TextIcon.args = TextIconArgs;
TextIcon.storyName = 'Text & Icon';