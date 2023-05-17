import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEsquerdoComponent } from './sidebaresquerdo.component';

describe('SidebarComponent', () => {
  let component: SidebarEsquerdoComponent;
  let fixture: ComponentFixture<SidebarEsquerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarEsquerdoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
