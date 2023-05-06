import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ModifarticleComponent } from './stock/modifarticle/modifarticle.component';
import { ErrorPageComponent } from './Error-page/error-page/error-page.component';
import { RegisterComponent } from './authentification/register/register.component';
// import { LoginComponent } from './authentification/login/login.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
  
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,

    AdminLayoutComponent,
    ModifarticleComponent,
    ErrorPageComponent,
    RegisterComponent,
    // LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
