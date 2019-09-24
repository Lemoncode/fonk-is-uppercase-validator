import { FieldValidationFunctionSync } from '@lemoncode/fonk';

const VALIDATOR_TYPE = 'IS_UPPERCASE';

let defaultMessage = 'The value must be a uppercase string';
export const setErrorMessage = message => (defaultMessage = message);

const validateType = value => typeof value === 'string';

const validate = (value: string) => value === value.toUpperCase();

const isDefined = value => value !== void 0 && value !== null && value !== '';

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage, customArgs } = fieldValidatorArgs;

  const succeeded =
    !isDefined(value) || (validateType(value) && validate(value));

  return {
    succeeded,
    message: succeeded ? '' : (message as string),
    type: VALIDATOR_TYPE,
  };
};
