import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpongeComponent } from './sponge.component';

describe('SpongeComponent', () => {
  let component: SpongeComponent;
  let fixture: ComponentFixture<SpongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
