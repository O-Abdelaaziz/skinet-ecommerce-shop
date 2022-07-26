import {Component, ElementRef, Input, OnInit, Self, ViewChild} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', {static: true})
  public input: ElementRef<HTMLInputElement> = {} as ElementRef;
  @Input()
  public type: string = 'text';
  @Input()
  public label: string = '';

  constructor(@Self() public _controlDirective: NgControl) {
    this._controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this._controlDirective.control;
    const validators = control?.validator ? [control.validator] : [];
    const asyncValidator = control?.asyncValidator ? [control.asyncValidator] : [];
    control?.setValidators(validators);
    control?.setAsyncValidators(asyncValidator);
    control?.updateValueAndValidity();
  }

  onChange(event: Event) {

  }

  onTouched() {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

}
