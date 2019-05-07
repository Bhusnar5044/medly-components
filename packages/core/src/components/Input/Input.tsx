import { defaultTheme } from '@medly-components/theme';
import { WithStyle, withTheme } from '@medly-components/utils';
import React from 'react';
import Label from '../Label';
import Text from '../Text';
import { InputFieldStyled, InputStyled } from './Input.styled';
import { Props } from './types';

const Input: React.FunctionComponent<Props> & WithStyle = React.forwardRef((props, ref) => {
    const { description, label, labelPosition, required, theme } = props;
    return (
        <InputFieldStyled>
            {label && (
                <Label required={required} labelPosition={labelPosition}>
                    {label}
                </Label>
            )}
            <InputStyled ref={ref} {...props} />
            {description && <Text textColor={theme.input.desciptionColor}>{description}</Text>}
        </InputFieldStyled>
    );
});

Input.displayName = 'Input';
Input.defaultProps = {
    theme: defaultTheme,
    required: false
};

export default withTheme(Input);
