import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutCommunityPage } from './about-community.page';

describe('AboutCommunityPage', () => {
  let component: AboutCommunityPage;
  let fixture: ComponentFixture<AboutCommunityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCommunityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCommunityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
