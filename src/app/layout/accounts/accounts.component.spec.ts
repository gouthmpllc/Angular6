import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AccountsComponent } from './accounts.component'
import { AccountsModule } from './accounts.module'

describe('AccountsComponent', () => {
  let component: AccountsComponent
  let fixture: ComponentFixture<AccountsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountsModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
