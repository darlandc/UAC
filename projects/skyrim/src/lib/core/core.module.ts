import { ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfileAppConfig } from './interfaces/profile-app-config.interface';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WrapperComponent } from './wrapper/wrapper.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ReactiveCharactersComponent } from './components/reactive-characters/reactive-characters.component';
import { UserControlAccessComponent } from './components/uac/uac.component';
import { EnvService } from './services/env.service';

@NgModule({
  declarations: [
    WrapperComponent,
    CharactersComponent,
    ReactiveCharactersComponent,
    UserControlAccessComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    WrapperComponent,
    CharactersComponent,
    ReactiveCharactersComponent,
    UserControlAccessComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [EnvService]
})
export class CoreModule {}
