import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PeriodicElement} from '../../shared/periodic-element';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  pName: string;
  pWeight: number;
    pSymbol: string;
    pt: PeriodicElement;
    @Output() pts = new EventEmitter<PeriodicElement>();
  constructor() { }

  ngOnInit() {
  }
    onAdd() {
   this.pt = {
        name : this.pName,
        weight: this.pWeight,
        symbol: this.pSymbol
    };
   this.pts.emit(this.pt);
    }
}
