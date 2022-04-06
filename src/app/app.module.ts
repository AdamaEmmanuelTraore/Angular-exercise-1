import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TryAppComponent } from './try-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TryAppComponent
  ],
  bootstrap: [TryAppComponent]
})
export class AppModule { }
