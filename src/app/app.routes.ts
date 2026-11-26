import { Routes } from '@angular/router';
import { Longread } from './pages/longread/longread';

export const routes: Routes = [
  { path: '', component: Longread, title: 'Интернет, который понимает игры' },
  { path: 'longread', redirectTo: '', pathMatch: 'full' },
];
