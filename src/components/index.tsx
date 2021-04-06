import React, { forwardRef } from 'react';
import { TextInput } from "react-native";
import { color } from '../colors';

const Input = ({
    isValid, placeholder, label,
    ...props
}, ref) =>
    <TextInput ref={ref} {...props}
        style={{
            color: color.text.primary,
            ...isValid !== undefined &&
            { borderColor: isValid ? color.success : color.error },
        }}
        placeholder={placeholder}
    />

export default forwardRef(Input);