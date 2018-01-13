import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the newdemo3', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const newdemo3 = fixture.debugElement.componentInstance;
    expect(newdemo3).toBeTruthy();
  }));
  it(`should have as title 'newdemo3'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const newdemo3 = fixture.debugElement.componentInstance;
    expect(newdemo3.title).toEqual('newdemo3');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to newdemo3!');
  }));
});
