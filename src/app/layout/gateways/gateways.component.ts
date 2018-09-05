import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-gateways',
    templateUrl: './gateways.component.html',
    styleUrls: ['./gateways.component.scss'],
    animations: [routerTransition()]
})
export class GatewaysComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
