import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPostComponent } from './social-post.component';

describe('SocialPostComponent', () => {
  let component: SocialPostComponent;
  let fixture: ComponentFixture<SocialPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
