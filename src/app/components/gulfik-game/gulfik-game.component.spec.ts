import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GulfikGameComponent } from './gulfik-game.component';

describe('GulfikGameComponent', () => {
  let component: GulfikGameComponent;
  let fixture: ComponentFixture<GulfikGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GulfikGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GulfikGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
