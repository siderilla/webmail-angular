import { Component, inject } from '@angular/core';
import { ComposeButtonComponent } from '../compose-button/compose-button.component';
import { ComposeModalComponent } from "../compose-modal/compose-modal.component";
import { CommonModule } from '@angular/common';
import { ComposeFormComponent } from "../compose-page/compose-form.component";
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-sidebar',
  imports: [ComposeButtonComponent, ComposeModalComponent, CommonModule, ComposeFormComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

	modalService = inject(ModalService)
	isModalVisible$ = this.modalService.isModalVisible$;

}
