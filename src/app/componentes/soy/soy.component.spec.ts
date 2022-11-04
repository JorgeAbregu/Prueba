import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyComponent } from './soy.component';

describe('SoyComponent', () => {
  let component: SoyComponent;
  let fixture: ComponentFixture<SoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
