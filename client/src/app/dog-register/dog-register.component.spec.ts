import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {DogRegisterComponent} from "./dog-register.component";

describe('DogRegisterComponent', () => {
  let component: DogRegisterComponent;
  let fixture: ComponentFixture<DogRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
