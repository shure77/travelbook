import { NgModule } from "@angular/core";
import {
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcButtonModule,
  MdcTopAppBarModule,
  MdcTypographyModule,
  MdcFormFieldModule,
  MdcTextFieldModule
} from "@angular-mdc/web";

@NgModule({
  declarations: [],
  imports: [
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcTopAppBarModule,
    MdcTypographyModule,
    MdcFormFieldModule,
    MdcTextFieldModule
  ],
  exports: [
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcTopAppBarModule,
    MdcTypographyModule,
    MdcFormFieldModule,
    MdcTextFieldModule
  ]
})
export class MaterialModule {}
