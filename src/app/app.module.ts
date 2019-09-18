import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './components/test/test.component';
import { ElevesComponent } from './components/eleves/eleves.component';
import { EleveComponent } from './components/eleve/eleve.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ElevesComponent,
    EleveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
