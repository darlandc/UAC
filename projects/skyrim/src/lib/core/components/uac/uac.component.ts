import { EnvService } from './../../services/env.service';
import { WIDGET } from './../../tokens/widget.token';
import { Widget } from './../../interfaces/widget.interface';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-uac',
  templateUrl: './uac.component.html',
  styleUrls: ['./uac.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: UserControlAccessComponent
    }
  ]
})
export class UserControlAccessComponent implements Widget, OnDestroy {

  private subSink = new Subscription();

  constructor(private env: EnvService) {
    console.log(this.env, 'inside lib');
  }

  load(): void {
    this.sinc();
  }

  refresh(): void {
    this.sinc();
  }

  sinc(): void {
    // this.subSink.add();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
