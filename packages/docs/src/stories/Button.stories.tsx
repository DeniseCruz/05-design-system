
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, type ButtonProps } from '@ignite-ui/react';
import { ArrowRight } from 'phosphor-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Button',
  component: Button,


  args:{
    children: 'Enviar',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes:{
     variant:{
       options: ['primary','secondary','tertiary'],
       control: {
          type: 'inline-radio',
       },
     },
     size:{
       options: ['sm','md'],
       control: {
          type: 'inline-radio',
       },
       disabled:{
         type: 'boolean',
       }
     },

     onClick: {
       action: 'click',
     },
  },
  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
   args: {
     variant : 'secondary',
     children: 'Create New'
   }  
};


export const Tertuary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    
  },
};

export const  Disabled: Story = {
  args: {
    disabled: 'true',
    
  },
};

export const  WithIcon: Story = {
  args: {
    children:(
      <>
      Próximo Password
      <ArrowRight weight="bold" />
      </>
    ),
    
  },
};


