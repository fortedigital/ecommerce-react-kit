import { ValidationRule } from 'react-hook-form';

export function emailValidationRule(message: string): ValidationRule<RegExp> {
  return {
    value:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    message,
  };
}

export function requiredValidationRule(
  message: string
): ValidationRule<boolean> {
  return {
    value: true,
    message,
  };
}
