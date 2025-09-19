import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { type Mail } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

	private http = inject(HttpClient);
	private apiUrl = '/assets/mails.json';

	getAllMails(): Observable<Mail[]> {
		return this.http.get<Mail[]>(this.apiUrl).pipe(
			map(mails => mails.map)
		)
	}
  
}
