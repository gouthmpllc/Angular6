import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
//import { Routes, RouterModule} from '@angular/router';

//import { Router } from '@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './endpoints.component.html',
    styleUrls: ['./endpoints.component.scss'],
    animations: [routerTransition()]
})

export class EndpointsComponent implements OnInit {
    constructor() {}

    ngOnInit() { }
//     btnClick= function () {
//         this.router.navigate('/login');
// };

}



