import type { StoryObj, Meta } from '@storybook/react';
import LabelArtDestacados from './LabelArtDestacados';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof LabelArtDestacados> = {
  title: 'ui/components/atoms/label-articulos-destacados',
  component: LabelArtDestacados,
  argTypes: {
    text: { control: 'text' },
    colorVariant: { control: { type: 'select', options: ['main', 'primary'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const secondary: Story = {
  args: {
    text: 'ARTICULOS DESTACADOS',
  },
};

export const primary: Story = {
  args: {
    colorVariant: 'secondary',
  },
};
