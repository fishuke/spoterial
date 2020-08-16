import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {LayoutComponent} from './design/layout.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';


const routes: Routes = [
  {
    path: '**',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
