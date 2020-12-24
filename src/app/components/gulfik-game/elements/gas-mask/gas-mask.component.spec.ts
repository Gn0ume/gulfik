import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasMaskComponent } from './gas-mask.component';

describe('GasMaskComponent', () => {
  let component: GasMaskComponent;
  let fixture: ComponentFixture<GasMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
