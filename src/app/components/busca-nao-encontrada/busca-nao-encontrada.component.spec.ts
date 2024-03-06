import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaNaoEncontradaComponent } from './busca-nao-encontrada.component';

describe('BuscaNaoEncontradaComponent', () => {
  let component: BuscaNaoEncontradaComponent;
  let fixture: ComponentFixture<BuscaNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaNaoEncontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
