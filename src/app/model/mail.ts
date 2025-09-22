export interface Mail {

	date: Date;
	from: string;
	to?: string;
	subject: string;
	body: string;

	folder: 'inbox' | 'sent' | 'drafts' | 'trash';

}
