import { AfterContentInit, Component, ContentChildren, QueryList, TemplateRef, Input } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;
  @Input() headerTemplate: TemplateRef<any>;

  constructor() { }

  get tabsContext() {
    return { tabs: this.tabs };
  }

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    selectedTab.selected = true;
  }
}
