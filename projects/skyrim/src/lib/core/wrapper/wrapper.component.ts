import { FLAGS } from './../enums/flag.enum';
import { EnvService } from './../services/env.service';
import { ManagerService } from './../services/manager.service';
import { WIDGET } from './../tokens/widget.token';
import { Component, OnInit, ContentChild } from '@angular/core';
import { Widget } from '../interfaces/widget.interface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @ContentChild(WIDGET as any, { static: true })
  widget: Widget;
  loading: boolean;
  checkAnyFlag;
  DEFAULT = false;
  LOGIN = false;
  MFA = false;
  SECUPDATE = false;

  constructor(private manager: ManagerService, private env: EnvService) {}

  ngOnInit(): void {

    this.checkAnyFlag = this.manager.checkFlag(this.env.activatedFlags, FLAGS.LOGIN);
    console.log(this.checkAnyFlag);

    this.DEFAULT = this.manager.checkFlag(this.env.activatedFlags, FLAGS.DEFAULT);
    this.LOGIN = this.manager.checkFlag(this.env.activatedFlags, FLAGS.LOGIN);
    this.MFA = this.manager.checkFlag(this.env.activatedFlags, FLAGS.DEFAULT);

    if (this.widget) {
      this.widget.load();
    }
  }

  refresh(): void {
    this.widget.refresh();
  }

}
