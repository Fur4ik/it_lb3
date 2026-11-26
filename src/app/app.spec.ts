import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('creates the app', () => {
    expect(TestBed.createComponent(App).componentInstance).toBeTruthy();
  });

  it('renders the longread and its table of contents at the root', async () => {
    const harness = await RouterTestingHarness.create('/');
    const page = harness.routeNativeElement!;

    expect(page.querySelector('h1')?.textContent).toContain('понимает игры');
    const anchors = page.querySelectorAll('nav a');
    expect(anchors.length).toBe(6);
    for (const anchor of anchors) {
      expect(page.querySelector(anchor.getAttribute('href')!)).toBeTruthy();
    }
  });

  it('explains the selected part of the RDF triple', async () => {
    const harness = await RouterTestingHarness.create('/');
    const page = harness.routeNativeElement!;
    const predicate = page.querySelectorAll<HTMLButtonElement>('.graph button')[1];
    predicate.click();
    harness.detectChanges();

    expect(predicate.getAttribute('aria-pressed')).toBe('true');
    expect(page.querySelector('.graph figcaption')?.textContent).toContain('свойство из словаря');
  });
});
