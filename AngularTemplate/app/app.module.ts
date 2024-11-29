import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,CommonModule,CanvasJSAngularChartsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
