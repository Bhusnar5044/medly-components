import { HTMLProps } from '@medly-components/utils';
import { Option } from '../types';

interface StyledProps {
    size: 'S' | 'M';
    isNested?: boolean;
    maxWidth?: string;
    optionAutoWidth?: boolean;
    includesNestedOptions?: boolean;
    variant: 'outlined' | 'filled' | 'flat' | 'fusion';
}

export interface OptionsProps extends Omit<HTMLProps<HTMLUListElement>, 'size'>, StyledProps {
    id?: string;
    options: Option[];
    hasError?: boolean;
    onOptionClick: (option: Option) => void;
}

export type StyledOptionsProps = StyledProps;
