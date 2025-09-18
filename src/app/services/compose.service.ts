import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComposeService {

	API_URL = './../../../public/assets/messages.json'

	constructor(private router: Router) {};

	openCompose() {
		this.router.navigate(['/compose']);
	}

}
