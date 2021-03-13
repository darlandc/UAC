import { ProfileAppConfig } from './core/interfaces/profile-app-config.interface';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SkyrimComponent } from './skyrim.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/core';
import { EnvService } from './core/services/env.service';

@NgModule({
  declarations: [SkyrimComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SkyrimComponent],
  providers: [ EnvService ]
})
export class SkyrimModule {

  static forChild(config: ProfileAppConfig): ModuleWithProviders<SkyrimModule> {
    return {
      ngModule: SkyrimModule,
      providers: [
        {provide: EnvService, useValue: config }
      ]
    };
  }
}
