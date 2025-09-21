import { Routes } from '@angular/router';
import {Authorization} from './components/authorization/authorization';
import {Index} from './components/index';

export const routes: Routes = [
  {
    path: 'login', component: Authorization
  },
  {
    path: 'index', component: Index
  }
];
