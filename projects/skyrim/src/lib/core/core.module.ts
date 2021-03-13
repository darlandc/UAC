import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WrapperComponent } from './wrapper/wrapper.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ReactiveCharactersComponent } from './components/reactive-characters/reactive-characters.component';

@NgModule({
  declarations: [
    WrapperComponent,
    CharactersComponent,
    ReactiveCharactersComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    WrapperComponent,
    CharactersComponent,
    ReactiveCharactersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class CoreModule {}
