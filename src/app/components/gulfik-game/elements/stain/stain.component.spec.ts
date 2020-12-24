import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StainComponent } from './stain.component';

describe('StainComponent', () => {
  let component: StainComponent;
  let fixture: ComponentFixture<StainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
