import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JobOperningComponent } from './job-operning/job-operning.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const appRoute:Routes=[
  {path:'',component:JobOperningComponent},
  {path:'apply/:position',component:FormComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    JobOperningComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
