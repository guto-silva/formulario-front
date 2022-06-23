import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCadastradoComponent } from './produto-cadastrado.component';

describe('ProdutoCadastradoComponent', () => {
  let component: ProdutoCadastradoComponent;
  let fixture: ComponentFixture<ProdutoCadastradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCadastradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
