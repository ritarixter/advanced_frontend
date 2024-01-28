import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora accusamus mollitia quasi quod nesciunt consectetur nobis dolore maxime officia, necessitatibus id minus nostrum ipsa, laborum sequi atque. Commodi, earum optio.'
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora accusamus mollitia quasi quod nesciunt consectetur nobis dolore maxime officia, necessitatibus id minus nostrum ipsa, laborum sequi atque. Commodi, earum optio.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]