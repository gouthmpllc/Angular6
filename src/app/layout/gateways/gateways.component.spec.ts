import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { GatewaysComponent } from './gateways.component'
import { GatewaysModule } from './gateways.module'

describe('FormComponent', () => {
  let component: GatewaysComponent
  let fixture: ComponentFixture<GatewaysComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          GatewaysModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaysComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
