import { Component, OnInit } from '@angular/core';
import {User} from './user';
@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.css']
})
export class PartTwoComponent implements OnInit {
users: User[] = [];
sites: string[] = [];
i: boolean =  true;
i1: boolean =  true;
in: boolean = false;
  editUser: User;
  constructor() { }

  ngOnInit() {
  }
  addUser(name: string) {
    const user = {
      id: this.genId(this.users),
      name: name
    };
    this.users.push(user);
  }
addSite(site: string) {
    this.sites.push(site);
}
sort() {
    this.i = false;
    this.users.sort(function(a, b) {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });
}
  reverse() {
    this.i = true;
    this.users.reverse();
  }
  sort1() {
    this.i1 = false;
    this.sites.sort();
  }
  reverse1() {
    this.i1 = true;
    this.sites.reverse();
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
  edit(user) {
    this.editUser = user;
  }
  update() {
    this.editUser = undefined;
  }
    onRemove(i: number) {
    this.sites.splice(i, 1);
    }
}
