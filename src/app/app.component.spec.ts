import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsService } from './forms.service';
import { Observable, of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('AppComponent', () => {
  let service: FormsService;
  let spy: any;
  beforeEach(async(() => {
    service = new FormsService();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jimdo-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('jimdo-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to jimdo-test!');
  });

  it('should render input for name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input.name')).toBeDefined();
  });

  it('on submit click service call should happen', () => {
    spy = spyOn(service, 'submitUserData').and.returnValue(of(true));
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = fixture.debugElement.nativeElement.querySelector('input[type=submit]');
    button.click();
    const appComponent = new AppComponent(service);
    expect(appComponent.submit()).toBeTruthy();
    expect(service.submitUserData).toHaveBeenCalled();

  });
});
