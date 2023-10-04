import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleAccountsComponent } from './google-accounts.component';

describe('GoogleAccountsComponent', () => {
  let component: GoogleAccountsComponent;
  let fixture: ComponentFixture<GoogleAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
