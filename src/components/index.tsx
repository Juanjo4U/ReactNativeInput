import React, { forwardRef } from 'react';
import { TextInput } from "react-native";
import { color } from '../colors';
import { constants } from '../utils/constants';

const Input = ({
    isValid, placeholder, label,
    ...props
}, ref) =>
    <TextInput ref={ref} {...props}
        style={{
            color: color.text.primary,
            borderWidth: constants.border.width,
            borderRadius: constants.border.radius,
            borderColor: color.border.primary,
            ...isValid !== undefined &&
            { borderColor: isValid ? color.success : color.error },
        }}
        placeholder={placeholder}
    />

export default forwardRef(Input);