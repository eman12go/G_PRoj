import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPageModule } from './about-page/about-page.module';
import { HomeModule } from './share/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from './core/footer/footer.component'
import {HeaderComponent} from './core/header/header.component'

@NgModule({
  declarations: [AppComponent, FooterComponent,HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RouterModule,
    BrowserAnimationsModule,
    AboutPageModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
