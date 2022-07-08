import { defaultTheme, SingleSelectTheme } from '@medly-components/theme';
import type { FC } from 'react';
import Box from '../Box';
import Text from '../Text';
import { StyledBox } from './SingleSelect.styled';
import { Option, SingleSelectProps } from './types';

export const variants: Required<SingleSelectProps>['variant'][] = ['outlined', 'filled', 'flat', 'fusion'];
export const sizes: Required<SingleSelectProps>['size'][] = ['S', 'M'];

export const options = [
    { value: 'all', label: 'All' },
    { value: 'Dummy1 option', label: 'Dummy1 option', disabled: true },
    { value: 'Dummy2 option', label: 'Dummy2 option' },
    {
        value: [
            { value: 'Some 1', label: 'Some 1' },
            {
                value: [
                    { value: 'Thing 1', label: 'Thing 1' },
                    { value: 'Thing 2', label: 'Thing 2' }
                ],
                label: 'Some 2'
            }
        ],
        label: 'Dummy3 option'
    },
    { value: 'Dummy4 option', label: 'Dummy4 option' },
    { value: 'Dummy5 option', label: 'Dummy5 option' },
    { value: 'Dummy6 option', label: 'Dummy6 option' }
];

export const customComponentOptions = [
    { value: 'all', label: 'All' },
    {
        value: 'Dummy1 option',
        label: 'Dummy1 option',
        disabled: true,
        component: (
            <Box px={0} py={0} bg="transparent">
                <StyledBox bg="transparent">
                    <Text textVariant="body2" textWeight="Medium" wrap="nowrap">
                        Dummy1 option title 1
                    </Text>
                    <Text textVariant="body3">Dummy description</Text>
                </StyledBox>
                <StyledBox bg="transparent">
                    <Text textVariant="body2" textWeight="Medium" wrap="nowrap">
                        Dummy1 option title 2
                    </Text>
                    <Text textVariant="body3">Dummy description</Text>
                </StyledBox>
            </Box>
        ),
        componentContent: ['Dummy1 option title 1', 'Dummy1 option title 2', 'Dummy description']
    },
    {
        value: 'Dummy2 option',
        label: 'Dummy2 option',
        component: (
            <Box px={0} py={0} bg="transparent">
                <StyledBox bg="transparent">
                    <Text textVariant="body2" textWeight="Medium" wrap="nowrap">
                        Dummy2 Option title 1
                    </Text>
                    <Text textVariant="body3">Dummy description</Text>
                </StyledBox>
                <StyledBox bg="transparent">
                    <Text textVariant="body2" textWeight="Medium" wrap="nowrap">
                        Dummy2 Option title 2
                    </Text>
                    <Text textVariant="body3">dummy description</Text>
                </StyledBox>
            </Box>
        ),
        componentContent: ['Dummy2 Option title 1', 'Dummy2 Option title 2', 'dummy description']
    }
];

export const ThemeInterface: FC<SingleSelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.singleSelect
};

export const OptionProps: FC<Option> = () => null;
