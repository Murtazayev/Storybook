import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

export const Primary = () => <Center><Button variant='primary'>Primary</Button></Center>
export const Secondary = () => <Center><Button variant='secondary'>Secondary</Button></Center>
export const Succes = () => <Center><Button variant='succes'>Succes</Button></Center>
export const Danger = () => <Center><Button variant='denger'>Danger</Button></Center>


const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}


export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    // children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}