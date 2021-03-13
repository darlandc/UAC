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
  SHIELDING = false;

  constructor(private manager: ManagerService, private env: EnvService) {
    this.checkFlags();
  }

  ngOnInit(): void {

    if (this.widget) {
      this.widget.load();
    }
  }

  refresh(): void {
    this.widget.refresh();
  }

  checkFlags(): void {
    this.DEFAULT = this.manager.checkFlag(this.env.activatedFlags, FLAGS.DEFAULT);
    !this.DEFAULT
      ? console.error('YOU MUST ACTIVATE THE DEFAULT FLAG!')
      : console.log('DEFAULT FLAG IS ON!');
    this.LOGIN = this.manager.checkFlag(this.env.activatedFlags, FLAGS.LOGIN);
    this.MFA = this.manager.checkFlag(this.env.activatedFlags, FLAGS.MFA);
    this.SECUPDATE = this.manager.checkFlag(this.env.activatedFlags, FLAGS.SECUPDATE);
    this.SHIELDING = this.manager.checkFlag(this.env.activatedFlags, FLAGS.SHIELDING);
  }
}
