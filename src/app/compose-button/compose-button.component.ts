import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ComposeService } from '../services/compose.service';

@Component({
  selector: 'app-compose-button',
  imports: [RouterModule, RouterLink],
  templateUrl: './compose-button.component.html',
  styleUrl: './compose-button.component.scss'
})
export class ComposeButtonComponent {



}
