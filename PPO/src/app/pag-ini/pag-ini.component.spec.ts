import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagIniComponent } from './pag-ini.component';

describe('PagIniComponent', () => {
  let component: PagIniComponent;
  let fixture: ComponentFixture<PagIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagIniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
