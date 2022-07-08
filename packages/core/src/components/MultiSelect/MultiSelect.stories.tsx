import { defaultTheme, MultiSelectTheme } from '@medly-components/theme';
import type { FC } from 'react';
import Box from '../Box';
import Text from '../Text';
import { StyledBox } from './MultiSelect.styled';
import { MultiSelectProps } from './types';

export const variants: Required<MultiSelectProps>['variant'][] = ['outlined', 'filled', 'fusion'];
export const sizes: Required<MultiSelectProps>['size'][] = ['S', 'M'];

export const options = [
        { value: 'lorem pharmacy', label: 'Lorem Pharmacy' },
        { value: 'ipsum pharmacy', label: 'Ipsum Pharmacy', creatable: true },
        {
            label: 'Group',
            value: [
                { value: 'a pharmacy', label: 'a Pharmacy with some big label' },
                { value: 'b pharmacy', label: 'b Pharmacy' },
                { value: 'c pharmacy', label: 'c Pharmacy' },
                { value: 'd pharmacy', label: 'd Pharmacy' }
            ]
        }
    ],
    optionsWithCustomComponent = [
        {
            value: 'lorem pharmacy',
            label: 'Lorem Pharmacy',
            component: (
                <StyledBox px={0} py={0} bg="transparent">
                    <Text textWeight="Medium">Lorem Pharmacy</Text>
                    <Text>Lorem pharmacy description</Text>
                </StyledBox>
            ),
            componentContent: ['Lorem Pharmacy', 'Lorem pharmacy description']
        },
        {
            value: 'ipsum pharmacy',
            label: 'Ipsum Pharmacy',
            component: (
                <Box px={0} py={0} bg="transparent">
                    <StyledBox px={0} py={0} bg="transparent">
                        <Text textWeight="Medium">Ipsum Pharmacy</Text>
                        <Text>Ipsum pharmacy description</Text>
                    </StyledBox>
                    <StyledBox px={0} py={0} bg="transparent">
                        <Text textWeight="Medium">Ipsum Pharmacy1</Text>
                        <Text>Ipsum pharmacy1 description</Text>
                    </StyledBox>
                </Box>
            ),
            componentContent: ['Ipsum Pharmacy', 'Ipsum Pharmacy1', 'Ipsum pharmacy description', 'Ipsum pharmacy1 description']
        }
    ],
    disabledOptions = [{ value: 'disabled pharmacy', label: 'Disabled Pharmacy', disabled: true }, ...options];

export const ThemeInterface: FC<MultiSelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.multiSelect
};
