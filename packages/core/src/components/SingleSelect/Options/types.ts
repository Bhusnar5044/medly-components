import { HTMLProps } from '@medly-components/utils';
import { Option } from '../types';

export interface StyledOptionsProps {
    size: 'S' | 'M';
    isNested?: boolean;
    maxWidth?: string;
    optionAutoWidth?: boolean;
    includesNestedOptions?: boolean;
    variant: 'outlined' | 'filled' | 'flat' | 'fusion';
}

export interface OptionsProps extends StyledOptionsProps, Omit<HTMLProps<HTMLUListElement>, 'size'> {
    id?: string;
    options: Option[];
    hasError?: boolean;
    onOptionClick: (option: Option) => void;
}
