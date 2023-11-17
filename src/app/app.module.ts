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
import { IndexComponentComponent } from './index-component/index-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { StoreComponentComponent } from './store-component/store-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'index',
    component: IndexComponentComponent
  },
  {
    path: 'nosotros',
    component: AboutComponentComponent
  },
  {
    path: 'tienda',
    component: StoreComponentComponent
  },
  {
    path: 'blog',
    component: BlogComponentComponent
  },
  {
    path: 'galeria',
    component: GalleryComponentComponent
  },
  {
    path: 'contacto',
    component: ContactComponentComponent
  },
  {
    path:'',
    redirectTo:'/index',
    pathMatch: 'full'
  },  
  {
    path: '**',
    component: PageNotFoundComponent
  },  

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavBarComponentComponent,
    HeroComponentComponent,
    CategoriesComponentComponent,
    AboutUsComponentComponent,
    OurProductsComponentComponent,
    FooterComponentComponent,
    IndexComponentComponent,
    AboutComponentComponent,
    StoreComponentComponent,
    BlogComponentComponent,
    GalleryComponentComponent,
    ContactComponentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
