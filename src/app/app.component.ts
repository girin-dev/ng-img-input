import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  dataUrl: any[] = [];
  readUrl($event) {
    for (let i = 0; i < $event.target.files.length; i++) {
      const reader = new FileReader();
      reader.onload = (loadEvent: any) => {
        this.dataUrl.push(loadEvent.target.result);
      };
      reader.readAsDataURL($event.target.files[i]);
    }
    console.log(this.dataUrl);
  }
}
