import { Routes } from '@angular/router';
import {Authorization} from './components/authorization/authorization';
import {Index} from './components/index';
import {Test} from './components/test/test';
import {Profile} from './components/profile/profile';

export const routes: Routes = [
  {
    path: 'login', component: Authorization
  },
  {
    path: 'index', component: Index
  },
  {
    path: 'test', component: Test
  },
  {
      path: 'profile', component: Profile
  }
];
