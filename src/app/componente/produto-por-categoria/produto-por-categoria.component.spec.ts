import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPorCategoriaComponent } from './produto-por-categoria.component';

describe('ProdutoPorCategoriaComponent', () => {
  let component: ProdutoPorCategoriaComponent;
  let fixture: ComponentFixture<ProdutoPorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoPorCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
