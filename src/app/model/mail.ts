export interface Mail {

	id: string;

	date: Date;
	from: string;
	to?: string;
	subject: string;
	body: string;

	folder: 'inbox' | 'sent' | 'drafts' | 'trash';

}
