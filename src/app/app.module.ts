import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { WhoIsUsComponent } from './Components/who-is-us/who-is-us.component';
import { TeamComponent } from './Components/team/team.component';
import { WorksComponent } from './Pages/works/works.component';
import { OurWorksComponent } from './Components/our-works/our-works.component';
import { StrategyComponent } from './Components/strategy/strategy.component';
import { ServicesShowComponent } from './Components/services-show/services-show.component';
import { LocationComponent } from './Components/location/location.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { OurServicesComponent } from './Pages/our-services/our-services.component';
import { WhatsappComponent } from './Components/whatsapp/whatsapp.component';
import { CardComponent } from './Components/card/card.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogBoxComponent } from './Components/dialog-box/dialog-box.component';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { OurWorksDetailsComponent } from './Pages/our-works-details/our-works-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    ContactUsComponent,
    WhoIsUsComponent,
    TeamComponent,
    WorksComponent,
    OurWorksComponent,
    StrategyComponent,
    ServicesShowComponent,
    
    LocationComponent,
    CarouselComponent,
    OurServicesComponent,
    WhatsappComponent,
    CardComponent,
    DialogComponent,
    DialogBoxComponent,
    OurWorksDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule, 
    CarouselModule,
    HttpClientModule, 
    MatButton,
    MatIconModule,
    MatFormFieldModule,
    MatInput,
    FormsModule,
    MatDialogModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
