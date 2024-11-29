import { NgModule } from '@angular/core';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

const AngularMaterial = [MatSidenavModule,MatIconModule]

@NgModule({
  imports: [AngularMaterial],
  exports: [AngularMaterial]

})
export class MaterialsModule { }
