import { Component, inject } from '@angular/core';
import { ComposeButtonComponent } from '../compose-button/compose-button.component';
import { ComposeModalComponent } from "../compose-modal/compose-modal.component";
import { CommonModule } from '@angular/common';
import { ComposeFormComponent } from "../compose-form/compose-form.component";
import { ModalService } from '../services/modal.service';
import { MailService } from '../services/mail.service';

@Component({
	selector: 'app-sidebar',
	imports: [ComposeButtonComponent, ComposeModalComponent, CommonModule, ComposeFormComponent],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

	modalService = inject(ModalService);
	mailService = inject(MailService);
	isModalVisible$ = this.modalService.isModalVisible$;

	onInboxClick() {
		this.mailService.setCurrentFolder('inbox');
	}

	onDraftsClick() {
		this.mailService.setCurrentFolder('drafts');
	}

	onSentClick() {
		this.mailService.setCurrentFolder('sent');
	}

	onTrashClick() {
		this.mailService.setCurrentFolder('trash');
	}


}
