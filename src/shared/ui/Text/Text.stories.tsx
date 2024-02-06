import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Заголовок',
    text: 'Параграф которые рассказывает о том что бывает'
};

export const Error = Template.bind({});
Error.args = {
    title: 'Заголовок',
    text: 'Параграф которые рассказывает о том что бывает',
    theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Заголовок',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Заголовок',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Заголовок',
    text: 'Параграф которые рассказывает о том что бывает'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Заголовок',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Параграф которые рассказывает о том что бывает',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
