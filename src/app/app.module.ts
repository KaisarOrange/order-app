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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'menu', component: MenuComponent },
      { path: 'order', component: WelcomeComponent },
      { path: '', redirectTo: '/order', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'id-ID' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
