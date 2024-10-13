import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePeliculasComponent } from './table-peliculas.component';

describe('TablePeliculasComponent', () => {
  let component: TablePeliculasComponent;
  let fixture: ComponentFixture<TablePeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
