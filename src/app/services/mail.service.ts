import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { type Mail } from '../model/mail';

@Injectable({
	providedIn: 'root'
})
export class MailService {

	private http = inject(HttpClient);
	private apiUrl = '/assets/mails.json';
	private storageKey = 'mails';

	constructor() {
		this.initMails();
	}

	private initMails(): void {
		const stored = localStorage.getItem(this.storageKey);

		if (!stored) {
			this.http.get<Mail[]>(this.apiUrl).subscribe(data => {
				localStorage.setItem(this.storageKey, JSON.stringify(data));
			});
		}
	}

	getAllMails(): Mail[] {
		const stored = localStorage.getItem(this.storageKey);
		return stored ? JSON.parse(stored) : [];
	}

	saveMails(mails: Mail[]): void {
		localStorage.setItem(this.storageKey, JSON.stringify(mails));
	}

	deleteMail(mail: Mail): void {
		const mails = this.getAllMails().filter(m => m !== mail);
		this.saveMails(mails);
	}

	getMailsByFolder(folder: Mail['folder']): Mail[] {
		return 	this.getAllMails()
					.filter(m => m.folder === folder);
	}

}
