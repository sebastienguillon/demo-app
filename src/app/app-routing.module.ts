import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ElevesComponent } from './components/eleves/eleves.component';


const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'styles',
    loadChildren: () => import('./components/styles/styles.module').then(m => m.StylesModule),
  },
  {
    path: 'eleves',
    component: ElevesComponent,
  },
  {
    path: 'eleves/:id',
    component: ElevesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
