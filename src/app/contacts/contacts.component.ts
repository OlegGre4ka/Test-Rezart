import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor( private modalService: NgbModal) { }
openWindowCustomClass(contacts) {
  this.modalService.open(contacts, { windowClass: 'dark-modal' });
}

  ngOnInit() {
  }

}
