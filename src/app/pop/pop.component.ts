import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
@Input() name;
@Output() cancell = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  cancel() {
    this.cancell.emit();
  }
}
