import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})
export class MenuService {

	private sidebarVisible = new BehaviorSubject<boolean>(false);
	sidebarVisible$ = this.sidebarVisible.asObservable();

	toggleSidebar() {
		this.sidebarVisible.next(!this.sidebarVisible.value);
	}

	showSidebar() {
		this.sidebarVisible.next(true);
	}

	closeSidebar() {
		this.sidebarVisible.next(false);
	}
}
