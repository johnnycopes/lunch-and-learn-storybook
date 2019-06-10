import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'storybook-lunch-and-learn';
  public toggleOn = false;
  public toggleDisabled = false;

  public onToggleChange(newToggleState: boolean): void {
    this.toggleOn = newToggleState;
  }
}
