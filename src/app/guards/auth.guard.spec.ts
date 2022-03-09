import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard Test', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  const createMockRoute = (id: string) => {
    return {
      params: { id },
    } as any;
  };

  const createMockRouteState = (url: string) => {
    return {
      params: { url },
    } as any;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [HttpClientTestingModule],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should not call endpoint if cookie exists', (done) => {
    authService.setCookie('id_token', 'testingCookie');
    const res$ = of((authService.getCookie('id_token')));
    res$.pipe(finalize(done)).subscribe((res) => expect(res).toBeTruthy());
  });

  if (environment.production) {
    it('should not be able to activate invalid route', (done) => {
      authService.deleteAllCookies();
      const route = createMockRoute('someRoute');
      const state = createMockRouteState('someUrl');
      const res$ = guard.canActivate(route, state);
      res$.pipe(finalize(done)).subscribe((res) => expect(res).toBeFalsy());
    });
  } else {
    it('should be able to activate invalid route when env !== production', (done) => {
      authService.deleteAllCookies();
      const route = createMockRoute('someRoute');
      const state = createMockRouteState('someUrl');
      const res$ = guard.canActivate(route, state);
      res$.pipe(finalize(done)).subscribe((res) => expect(res).toBeTruthy());
    });
  }
});
