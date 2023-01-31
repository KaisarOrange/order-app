import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardsComponent } from './menu/cards/cards.component';
import { CheckoutComponent } from './menu/checkout/checkout.component';
import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
import { PaymentComponent } from './menu/payment/payment.component';
import { ListComponent } from './menu/payment/list/list.component';
import { InputComponent } from './menu/payment/input/input.component';
import { HeadComponent } from './menu/payment/head/head.component';
import { RingkasanComponent } from './menu/payment/ringkasan/ringkasan.component';
import { AutosizeModule } from 'ngx-autosize';
import { DetailComponent } from './menu/detail/detail.component';
registerLocaleData(localeId, 'id');
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    CardsComponent,
    CheckoutComponent,
    PaymentComponent,
    ListComponent,
    InputComponent,
    HeadComponent,
    RingkasanComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutosizeModule,
    RouterModule.forRoot([
      { path: 'menu', component: MenuComponent },
      { path: 'menu/:id', component: DetailComponent },
      { path: 'order', component: WelcomeComponent },
      { path: '', redirectTo: '/order', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'id-ID' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
