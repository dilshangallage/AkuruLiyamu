import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinhalaAkuruLiyamuPage } from './sinhala-akuru-liyamu.page';

describe('SinhalaAkuruLiyamuPage', () => {
  let component: SinhalaAkuruLiyamuPage;
  let fixture: ComponentFixture<SinhalaAkuruLiyamuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaAkuruLiyamuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinhalaAkuruLiyamuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
