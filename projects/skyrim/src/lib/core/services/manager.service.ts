import { FLAGS } from './../enums/flag.enum';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  activatedFlags = [];

  constructor(private env: EnvService) {
    console.log(this.env, 'env service config provided by application');
    this.manageFlags(this.env.activatedFlags, FLAGS.MFA); // fixed
  }

  manageFlags(activatedFlags, startedFlags): void {
    console.log(activatedFlags);
    const hasFlag = activatedFlags.includes(startedFlags);
    console.log(hasFlag);
  }
}
