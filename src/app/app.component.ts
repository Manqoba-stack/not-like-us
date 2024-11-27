import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Say {{value}} I hear...</div>`,
})
export class AppComponent {
  value = 'Drake';

  constructor()
  {
   

  }
}
