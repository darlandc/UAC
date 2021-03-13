import { ProfileAppConfig } from './../../../skyrim/src/lib/core/interfaces/profile-app-config.interface';

export class config {
  config: ProfileAppConfig;
  host = '';

  constructor(){
    this.config = {
      host: 'https://dinamic.host.com',
      flags: [
        'login',
        'mfa',
      ]
    }
  }
}
