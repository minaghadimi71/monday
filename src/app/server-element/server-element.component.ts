import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PeriodicElement} from '../shared/periodic-element';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
    el: PeriodicElement[] = [{name: 'mina', weight: 50, symbol: 'm'}];
    displayedColumns: string[] = ['name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(this.el);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
    }
    added(ele: PeriodicElement) {
        this.el.push(ele);
        this.dataSource.paginator = this.paginator;
    }
}

