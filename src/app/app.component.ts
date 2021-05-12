import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-study-project';

  selectedTab = 'recipe';

  onNavigate(tabName: string) {
    this.selectedTab = tabName;
  }
}
