import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { WorksComponent } from './Pages/works/works.component';
import { OurServicesComponent } from './Pages/our-services/our-services.component'; 
import { OurWorksDetailsComponent } from './Pages/our-works-details/our-works-details.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent}, 
  {path: 'our-works', component: WorksComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path:'service/:id', component: OurServicesComponent},
  {path:'our-works/:id', component: OurWorksDetailsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
