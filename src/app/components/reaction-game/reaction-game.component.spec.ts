import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionGameComponent } from './reaction-game.component';

describe('ReactionGameComponent', () => {
  let component: ReactionGameComponent;
  let fixture: ComponentFixture<ReactionGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactionGameComponent]
    });
    fixture = TestBed.createComponent(ReactionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
