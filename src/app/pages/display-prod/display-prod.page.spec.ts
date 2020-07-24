import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayProdPage } from './display-prod.page';

describe('DisplayProdPage', () => {
  let component: DisplayProdPage;
  let fixture: ComponentFixture<DisplayProdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
