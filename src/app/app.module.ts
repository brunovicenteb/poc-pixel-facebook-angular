import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Adicione esta linha se estiver usando Angular Material

import { AppComponent } from './app.component';
import { TrackButtonComponent } from './track-button/track-button.component';
import { MatButtonModule } from '@angular/material/button'; // Importa o módulo do Angular Material para o botão

@NgModule({
  declarations: [
    AppComponent,
    TrackButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Adicione esta linha se estiver usando Angular Material
    MatButtonModule // Adicione o módulo do Angular Material para o botão
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
