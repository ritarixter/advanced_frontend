import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar} from './Avatar';
import avatarImg from './storybook.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: avatarImg,
    alt:"avatar"
};

export const Small = Template.bind({});
Small.args = {
    src: avatarImg,
    alt:"avatar",
    size: 30
};


