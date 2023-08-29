import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log('Email Validator -> validate -> control ', control);

    const value: string = control.value as string;

    if (value?.includes('test'))
      return {
        invalid: true,
      };

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    console.log('Email Validator -> registerOnValidatorChange -> fn ', fn);

    // throw new Error('Method not implemented.');
  }
}
