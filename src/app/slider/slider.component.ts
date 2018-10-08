import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor( private modalService: NgbModal, private _http: HttpClient) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  images = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/1340/500?random&t=${Math.random()}`);

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
