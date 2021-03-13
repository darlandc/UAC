import { FLAGS } from './../enums/flag.enum';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private env: EnvService) {
    console.log(this.env, 'env service config provided by application');
  }

  checkFlag(activatedFlags, startedFlags): any {
    const hasFlag = activatedFlags.includes(startedFlags);
    return hasFlag;
  }
}
