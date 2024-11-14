import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World';

  constructor()
  {
    if(this.value=='World')
    {
      console.log('hello');
    }

  }
}
