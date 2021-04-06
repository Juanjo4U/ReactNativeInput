export type inputValidationTypes = 'email' | 'password' | 'number' | 'float';

export interface Validate {
    required?: boolean,
    minValue?: number,
    maxValue?: number,
    minLength?: number,
    maxLength?: number,
    type?: inputValidationTypes,
    compare?: any,
    isValidating?: boolean
}

type AnyFunction = (...args: Array<any>) => any;

export interface InputPropsTypes {
    name?: string,
    label?: string,
    placeholder?: string,
    initialValue?: any,
    controledValue?: any,
    onChangeText?: AnyFunction,
    onSubmitEditing?: AnyFunction,
    validations?: Validate
}