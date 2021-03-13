import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SkyrimComponent } from './skyrim.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SkyrimComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SkyrimComponent]
})
export class SkyrimModule { }
