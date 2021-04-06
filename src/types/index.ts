type AnyFunction = (...args: Array<any>) => any;
type ValidationFunction = (...args: Array<any>) => boolean;

export type inputValidationTypes = 'email' | 'password' | 'number' | 'float';
export interface Validate {
    required?: boolean,
    minValue?: number,
    maxValue?: number,
    minLength?: number,
    maxLength?: number,
    type?: inputValidationTypes,
    compare?: any,
    myValidation?: ValidationFunction,
    isValidating?: boolean
}
export interface InputPropsTypes {
    name?: string,
    label?: string,
    placeholder?: string,
    initialValue?: any,
    controledValue?: any,
    onChangeText?: AnyFunction,
    onSubmitEditing?: AnyFunction,
    validations?: Validate,
    [x: string]: any
}