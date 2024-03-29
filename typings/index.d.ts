import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isUppercase {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
