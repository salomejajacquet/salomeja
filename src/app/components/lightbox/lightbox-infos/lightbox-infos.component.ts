import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project, Image } from 'src/app/models/project.model';

@Component({
  selector: 'app-lightbox-infos',
  templateUrl: './lightbox-infos.component.html',
  styleUrls: ['./lightbox-infos.component.scss']
})
export class LightboxInfosComponent implements OnInit {
  @Input() project: Project;
  @Input() image: Image;
  @Output() closeInfos: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  close() {
    this.closeInfos.emit(true);
  }
}
