import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnglishAkuruLiyamuPage } from './english-akuru-liyamu.page';

describe('EnglishAkuruLiyamuPage', () => {
  let component: EnglishAkuruLiyamuPage;
  let fixture: ComponentFixture<EnglishAkuruLiyamuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishAkuruLiyamuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishAkuruLiyamuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
