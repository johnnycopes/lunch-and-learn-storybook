import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type ToggleTextPosition = 'left' | 'right';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() model = false; // The state of the component (turns the switch on or off)
  @Input() text: string; // The text to display next to the toggle switch
  @Input() textPosition: ToggleTextPosition; // Can be set to 'left' or 'right'. This determines the placement of the text
  @Input() locked: boolean; // If true, the toggle switch will be locked in its current position
  @Input() disabled: boolean; // If true, the component will be visually and functionally disabled
  @Input() showLoadingIcons = false; // If true, the toggle switch will display icons to indicate loading state
  @Input() loading = false; // Shows either a checkmark (loading complete) or spinner animation (loading in progress)
  @Output() changeAction = new EventEmitter<boolean>(); // Emits the state of the toggle component whenever it's changed
  public uuid: string; // A unique UUID used in the to link the HTML <input> `id` attribute and <label> `for` attribute

  constructor() { }

  ngOnInit(): void {
    this.uuid = this.generateUUID();
  }

  public onToggle(): void {
    this.model = !this.model;
    this.changeAction.emit(this.model);
  }

  private generateUUID(): string {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string): string => {
      // tslint:disable-next-line:no-bitwise
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      // tslint:disable-next-line:no-bitwise
      return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
  }
}
