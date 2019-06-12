import { Component, Input, OnInit, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective, { read: InputRefDirective, static: false })
  input: InputRefDirective;

  constructor() { }

  public get classes(): { [key: string]: string } {
    const cssClasses = {};
    if (this.icon) {
      cssClasses[`fa-${this.icon}`] = true;
    }
    return cssClasses;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (!this.input) {
      console.error('The fa-input component needs an input element inside its content area');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus(): boolean {
    return this.input ? this.input.focus : false;
  }

}
