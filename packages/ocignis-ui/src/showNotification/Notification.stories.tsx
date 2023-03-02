import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../Button';

import { showNotification } from '.';

export default {
  component: Button,
  title: 'Notification',
} as Meta;

const base: ButtonProps = {
  children: 'Notification',
  variant: 'contained',
};

const Template: Story<ButtonProps> = (args) => <Button {...base} {...args} />;

export const Success = Template.bind({});
const SuccessArgs: ButtonProps = {
  ...base,
  children: 'Success',
  onClick: () => showNotification({ title: 'New folder has been created.' }),
};
Success.args = SuccessArgs;

export const Error = Template.bind({});
const ErrorArgs: ButtonProps = {
  ...base,
  children: 'Error',
  onClick: () =>
    showNotification({
      title: 'Error happened while trying to create folder.',
      type: 'error',
      duration: 9000,
    }),
};
Error.args = ErrorArgs;

export const Loading = Template.bind({});
const LoadingArgs: ButtonProps = {
  ...base,
  children: 'Loading',
  onClick: () =>
    showNotification({
      title: `Deleting file 'project-costs.xlsx'`,
      isLoading: true,
    }),
};
Loading.args = LoadingArgs;

export const LoadingWithDuration = Template.bind({});
const LoadingWithDurationArgs: ButtonProps = {
  ...base,
  children: 'Loading',
  onClick: () =>
    showNotification({
      title: `Deleting file 'project-costs.xlsx'`,
      isLoading: true,
      showDuration: true,
    }),
};
LoadingWithDuration.args = LoadingWithDurationArgs;
