import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    animations: [routerTransition()]
})
export class AccountsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
