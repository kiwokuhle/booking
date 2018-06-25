import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HelpComponent } from './help/help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';
const appRoutes: Routes = [

  { path: 'home',      component: HomeComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'help', component: HelpComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'confirmation',      component: ConfirmationComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationComponent,
    SignInComponent,
    HelpComponent,
    HelpComponent,
    ContactUsComponent,
    AboutUsComponent,
    RegisterComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
