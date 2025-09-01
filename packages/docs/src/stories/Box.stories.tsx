

import type { Meta, StoryObj } from '@storybook/react-vite';

import {  Box, type BoxProps, Text } from '@ignite-ui/react';


export default {
  title: 'Surfaces/Box',
  component: Box,
  args:{
    children: (
      <>
      <Text>
      testando o elemento.
      </Text>
      </>    
    ),
    
  },
  argTypes:{
     children:{
       control: {
         type: null,
       },
     }
  }
   
   
} as Meta<BoxProps>;



export const Primary: StoryObj<BoxProps> = {
  
};


