import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ModalService {

	private modalSubject = new BehaviorSubject<boolean>(false);
	isModalVisible$ = this.modalSubject.asObservable();

	openModal() {
		this.modalSubject.next(true);
	}

	closeModal() {
		this.modalSubject.next(false);
	}

}

