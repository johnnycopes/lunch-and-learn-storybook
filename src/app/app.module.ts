import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { TabComponent } from './tab-panel/tab/tab.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    FaInputComponent,
    InputRefDirective,
    TabPanelComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
