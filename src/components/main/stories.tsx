import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
export const Default: Story = (args) => <Main {...args} />;

Default.args = {
  title: 'Next Boilerplate',
  description: 'TypeScript, ReactJs, NextJs e Styled Components'
};
