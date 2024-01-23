import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputModule } from './components/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncComponent } from './components/async/async.component';
import { OnPushTrialComponent } from './components/on-push-trial/on-push-trial.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncComponent,
    OnPushTrialComponent
  ],
  imports: [
    BrowserModule,
    InputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
