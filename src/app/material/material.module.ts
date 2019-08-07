import { NgModule } from '@angular/core';
import { MdcFabModule, MdcIconModule, MdcMenuModule, MdcButtonModule, MdcTopAppBarModule, MdcTypographyModule } from '@angular-mdc/web';



@NgModule({
  declarations: [],
  imports: [
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcTopAppBarModule,
    MdcTypographyModule
  ],
  exports: [
      MdcFabModule,
      MdcIconModule,
      MdcMenuModule,
      MdcButtonModule,
      MdcTopAppBarModule,
      MdcTypographyModule
  ]
})
export class MaterialModule { }