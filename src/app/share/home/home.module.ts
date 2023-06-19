import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import { WorksSectionComponent } from './components/works-section/works-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {SearchFilterComponent} from './components/search-filter/search-filter.component'

@NgModule({
  declarations: [
    PropertyHomeComponent,
    SearchPropertyComponent,
    WorksSectionComponent,
    AboutUsComponent,
    SearchFilterComponent,
  ],
  imports: [CommonModule, CarouselModule, HammerModule, IgxCarouselModule],
  exports: [PropertyHomeComponent, AboutUsComponent,
    SearchFilterComponent],
})
export class HomeModule {}
