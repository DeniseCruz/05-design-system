

import { styled } from './styles'
import { ComponentProps } from 'react'

/*
export const Button = styled('button', {
   fontFamily: '$default' ,
   backgroundColor: '$ignite300',
   borderRadius: '$sm',
   border:0,
   fontWeight: 'boold',
   color: '$white',

   variants:{
       size:{
          small: {
            fontsize: 14,
            padding: '$2 $4',
          },
          big:{
             fontsize:18,
             padding: '$3 $6',
          }
       },
   },

   defaultVariants:{
      size: 'small',
   }
})

export type ButtonProps = ComponentProps<typeof Button>
*/
export const Box = styled('box', {})

export type BoxProps = ComponentProps<typeof Box>

export * from './components/Text' ;

export * from './components/Heading' ;

export * from './components/Button' ;


export * from './components/Avatar' ;

export * from './components/TextInput' ;

export * from './components/Checkbox' ;

export * from './components/MultiStep' ;

export * from './components/TextArea' ;
