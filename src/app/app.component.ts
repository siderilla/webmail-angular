import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'webmail-angular';
}


// import { Component } from '@angular/core';
// import { HomeComponent } from "./home/home.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `<app-home></app-home>`,
//   imports: [HomeComponent]
// })
// export class AppComponent {}