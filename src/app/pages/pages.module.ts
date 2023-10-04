import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { GoogleAccountsComponent } from './layout/navbar/components/google-accounts/google-accounts.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NavbarComponent,
    LogoComponent,
    GoogleAccountsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [],
})
export class PagesModule { }
