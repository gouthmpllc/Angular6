import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { EndpointsComponent } from './endpoints.component'
import { EndpointsModule } from './endpoints.module'

describe('EndpointsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ EndpointsModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(EndpointsComponent)      
    const component = fixture.componentInstance
    expect(component).toBeTruthy( )
  })
})
