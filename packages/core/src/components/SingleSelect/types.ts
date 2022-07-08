import { SvgIconProps } from '@medly-components/icons';
import { HTMLProps, Omit } from '@medly-components/utils';
import type { FC, FocusEventHandler, ReactElement, RefObject } from 'react';

export interface Option {
    /** Option value */
    value: Option[] | any;
    /** Option label */
    label: string;
    /** This will be handled by component itself */
    selected?: boolean;
    /** Set it true if this option is disabled */
    disabled?: boolean;
    /** This will be handled by component itself */
    hovered?: boolean;
    /** to add custom option component */
    component?: ReactElement<any>;
    /** to filter custom component options  */
    componentContent?: string[];
}

export interface DefaultSelected {
    value: string;
    label: string;
}

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'prefix' | 'size'>;

export interface SingleSelectProps extends InputProps {
    /** Selected Value */
    value?: any;
    /** Function to be called on selecting any option */
    onChange?: (value: any) => void;
    /** Options */
    options: Option[];
    /** Variants */
    variant?: 'outlined' | 'filled' | 'flat' | 'fusion';
    /** Sizes */
    size?: 'S' | 'M';
    /** Set it it true to enable search functionality */
    isSearchable?: boolean;
    /** Min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Max width in px/rem/% (1rem = 10px)*/
    maxWidth?: string;
    /** Set it true if it includes nested options */
    includesNestedOptions?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes max content width for options modal */
    optionAutoWidth?: boolean;
    /** Set it true to disable the select action */
    disabled?: boolean;
    /** Show prefix, suffix, and character count elements. If set to false, only the input, label, and helper-text icon will be rendered. */
    showDecorators?: boolean;
    /** Set it true when it is required in any form */
    required?: boolean;
    /** Label */
    label?: string;
    /** Leading icon */
    prefix?: FC<any>;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
    /** Function to be called with the input value on Blur event*/
    validator?: (val: any) => string;
    /** Show Helper text and error text in a tooltip (popover) */
    showTooltipForHelperAndErrorText?: boolean;
    /** Toggle icon */
    suffix?: FC<SvgIconProps>;
}

export interface SelectWrapperProps extends Omit<SingleSelectProps, 'ref' | 'options'> {
    variant: Required<SingleSelectProps>['variant'];
    isErrorPresent?: boolean;
    areOptionsVisible?: boolean;
}

export interface CommonProps {
    id: string;
    ref: RefObject<HTMLInputElement>;
    value: any;
    label?: string;
    helperText?: string;
    errorText: string;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onKeyPress: (event: React.KeyboardEvent) => false | void;
    disabled?: boolean | boolean;
    showDecorators?: boolean;
    areOptionsVisible: boolean;
    onInvalid: () => void;
    validator: () => string;
}
