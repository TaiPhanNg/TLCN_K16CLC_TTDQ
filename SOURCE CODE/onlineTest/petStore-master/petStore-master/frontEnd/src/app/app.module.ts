import { MenuComponent } from './../pages/menu/menu.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// social login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

//pages import
import { LoginComponent } from 'src/pages/login/login.component';
import { DasboardComponent } from 'src/pages/dasboard/dasboard.component';
import { RegisterComponent } from 'src/pages/login/register/register.component';
import { CardComponent } from 'src/pages/pets/card/card.component';
import { Card2Component } from 'src/pages/questions/card/card.component';
import { Card3Component } from 'src/pages/Training/Part1/cardQuestion/card.component';
import { Card4Component } from 'src/pages/Training/Part2/cardQuestion/card.component';
import { Card5Component } from 'src/pages/Training/Part3/cardQuestion/card.component';
import { Card6Component } from 'src/pages/Training/Part4/cardQuestion/card.component';
import { Card7Component } from 'src/pages/Training/Part5/cardQuestion/card.component';
import { Card8Component } from 'src/pages/Training/Part6/cardQuestion/card.component';
import { Card9Component } from 'src/pages/Training/Part7/cardQuestion/card.component';
import { QuestionsComponent } from 'src/pages/questions/questions.component';
import { PetsComponent } from 'src/pages/pets/pets.component';
import { MyaccountComponent } from 'src/pages/myaccount/myaccount.component';
import { CustomersComponent } from 'src/pages/customers/customers.component';
import { ListcustomersComponent } from 'src/pages/listcustomers/listcustomers.component';
import { AvatarComponent } from 'src/pages/avatar/avatar.component';
import { PermissionsComponent } from 'src/pages/permissions/permissions.component';
import { TrainingComponent } from 'src/pages/Training/training.component';
import { Part1Component } from 'src/pages/Training/Part1/Part1.component';
import { Part2Component } from 'src/pages/Training/Part2/Part2.component';
import { Part3Component } from 'src/pages/Training/Part3/Part3.component';
import { Part4Component } from 'src/pages/Training/Part4/Part4.component';
import { Part5Component } from 'src/pages/Training/Part5/Part5.component';
import { Part6Component } from 'src/pages/Training/Part6/Part6.component';
import { Part7Component } from 'src/pages/Training/Part7/Part7.component';


registerLocaleData(en);

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("613166740770-7m3qgrvnpvrr32fg9pajit42efk40ts1.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("426710484570391")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DasboardComponent,
    RegisterComponent,
    CardComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Card8Component,
    Card9Component,
    PetsComponent,
    MyaccountComponent,
    CustomersComponent,
    ListcustomersComponent,
    AvatarComponent,
    PermissionsComponent,
    MenuComponent,
    QuestionsComponent,
    TrainingComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component,
    Part6Component,
    Part7Component,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    AngularFontAwesomeModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CardComponent,Card2Component,Card3Component,Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Card8Component,
    Card9Component,
  ]
})
export class AppModule { }
