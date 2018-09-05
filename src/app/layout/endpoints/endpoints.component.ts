import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './endpoints.component.html',
    styleUrls: ['./endpoints.component.scss'],
    animations: [routerTransition()]
})

export class EndpointsComponent implements OnInit {
    constructor() {}

    ngOnInit() { }
}
