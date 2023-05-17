import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDireitoComponent } from './sidebardireito.component';

describe('SidebarComponent', () => {
  let component: SidebarDireitoComponent;
  let fixture: ComponentFixture<SidebarDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarDireitoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
