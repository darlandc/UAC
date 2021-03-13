import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyrimComponent } from './skyrim.component';

describe('SkyrimComponent', () => {
  let component: SkyrimComponent;
  let fixture: ComponentFixture<SkyrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyrimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
