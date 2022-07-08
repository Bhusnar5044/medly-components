import { includesIgnoreCase, includesIgnoreCaseInArray } from '@medly-components/utils';
import { Option } from './types';

export const getInputValue = (selectedOptions: Option[]): string => {
    return selectedOptions.map(obj => obj.label).join(', ');
};

export const getDefaultSelectedOptions = (options: Option[], defaultValues: any[]) => {
    let newValues: any[] = [];
    options.forEach(op => {
        if (Array.isArray(op.value)) newValues = [...newValues, ...getDefaultSelectedOptions(op.value, defaultValues)];
        else if (defaultValues.includes(op.value)) newValues.push(op);
    });
    return newValues;
};

export const filterOptions = (options: Option[], str: string) => {
    let newValues: Option[] = [];
    options.forEach(op => {
        if (Array.isArray(op.value)) newValues = [...newValues, ...filterOptions(op.value, str)];
        else if (op.componentContent && includesIgnoreCaseInArray(op.componentContent, str)) newValues.push(op);
        else if (includesIgnoreCase(op.label, str)) newValues.push(op);
    });
    return newValues;
};
