import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { CategoriesComponentComponent } from './categories-component/categories-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { OurProductsComponentComponent } from './our-products-component/our-products-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavBarComponentComponent,
    HeroComponentComponent,
    CategoriesComponentComponent,
    AboutUsComponentComponent,
    OurProductsComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
