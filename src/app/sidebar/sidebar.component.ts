import { Component, inject } from '@angular/core';
import { ComposeButtonComponent } from '../compose-button/compose-button.component';
import { ComposeModalComponent } from "../compose-modal/compose-modal.component";
import { ComposeService } from '../services/compose.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [ComposeButtonComponent, ComposeModalComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

	composeService = inject(ComposeService);

	isModalVisible$ = this.composeService.isModalVisible$;

}
