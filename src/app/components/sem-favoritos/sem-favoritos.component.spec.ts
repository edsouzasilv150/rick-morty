import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemFavoritosComponent } from './sem-favoritos.component';

describe('SemFavoritosComponent', () => {
  let component: SemFavoritosComponent;
  let fixture: ComponentFixture<SemFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
