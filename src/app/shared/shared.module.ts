import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponentDependencyModule } from '../external-modules/external-modules.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Constant } from './utilities/constant.class';

@NgModule({
  imports: [
    ExternalComponentDependencyModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExternalComponentDependencyModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
