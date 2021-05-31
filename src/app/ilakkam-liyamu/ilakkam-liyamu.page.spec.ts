import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IlakkamLiyamuPage } from './ilakkam-liyamu.page';

describe('IlakkamLiyamuPage', () => {
  let component: IlakkamLiyamuPage;
  let fixture: ComponentFixture<IlakkamLiyamuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IlakkamLiyamuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IlakkamLiyamuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
