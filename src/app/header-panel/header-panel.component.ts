import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AccountComponent } from '../account/account.component';
import { LogoNameComponent } from '../logo-name/logo-name.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header-panel',
  imports: [MatToolbarModule, 
	MatButtonModule,
	MatIconModule,
	LogoNameComponent, 
	SearchBarComponent, 
	AccountComponent],
	
  templateUrl: './header-panel.component.html',
  styleUrl: './header-panel.component.scss'
})
export class HeaderPanelComponent {

}
