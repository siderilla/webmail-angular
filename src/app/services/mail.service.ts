import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { type Mail } from '../model/mail';
import { BehaviorSubject, combineLatest, map } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class MailService {

	private http = inject(HttpClient);
	private apiUrl = '/assets/mails.json';
	private storageKey = 'mails';

	private mailsSubject = new BehaviorSubject<Mail[]>([]);
	public mails$ = this.mailsSubject.asObservable();

	private currentFolderSubject = new BehaviorSubject<Mail['folder']>('inbox');
	public currentFolder$ = this.currentFolderSubject.asObservable();

	constructor() {
		this.initMails();
	}

	private initMails(): void {
		const stored = localStorage.getItem(this.storageKey);

		if (stored) {
			this.updateSubject(JSON.parse(stored));
		} else {
			this.http.get<Mail[]>(this.apiUrl).subscribe(data => {
				localStorage.setItem(this.storageKey, JSON.stringify(data));
				this.updateSubject(data);
			});
		}
	}

	private updateSubject(data: Mail[]): void {
		const mails = data.map(m => ({
			...m,
			date: new Date(m.date)
		}));
		this.mailsSubject.next(mails);
	}

	setCurrentFolder(folder: Mail['folder']) {
		this.currentFolderSubject.next(folder)
		console.log("mail cambiata", folder)
	}

	filteredMails$ = combineLatest([
		this.mails$,
		this.currentFolder$
	]).pipe(
		map(([mails, folder]) => mails
			.filter(m => m.folder === folder)
			.sort((a, b) => b.date.getTime() - a.date.getTime()))
	);



	

	// getInbox(): Mail[] {
	// 	return this.mails.filter(m => m.folder === 'inbox');
	// }


	// getAllMails(): Mail[] {
	// 	const stored = localStorage.getItem(this.storageKey);
	// 	if (stored) {
	// 		return JSON.parse(stored).map((m: any) => ({
	// 			...m,
	// 			date: new Date(m.date)
	// 		}));
	// 	}

	// 	this.http.get<Mail[]>(this.apiUrl).subscribe(data => {
	// 		localStorage.setItem(this.storageKey, JSON.stringify(data));
	// 	});

	// 	return [];
	// }

	// saveMails(mails: Mail[]): void {
	// 	localStorage.setItem(this.storageKey, JSON.stringify(mails));
	// }

	// deleteMail(mail: Mail): void {
	// 	const mails = this.getAllMails().filter(m => m !== mail);
	// 	this.saveMails(mails);
	// }

	// getMailsByFolder(folder: Mail['folder']): Mail[] {
	// 	return this.getAllMails()
	// 		.filter(m => m.folder === folder);
	// }

}
