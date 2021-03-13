import { WIDGET } from './../../tokens/widget.token';
import { Widget } from './../../interfaces/widget.interface';
import { Component, OnDestroy } from '@angular/core';
import { CharacteresService } from '../../services/characteres.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-reactive-characters',
  templateUrl: './reactive-characters.component.html',
  styleUrls: ['./reactive-characters.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: ReactiveCharactersComponent
    }
  ]
})
export class ReactiveCharactersComponent implements Widget, OnDestroy {
  list = Array.from({ length: 40 }, (_, i) => i + 1);
  form = new FormControl();
  readonly character$ = this.service.character$;

  private subSink = new Subscription();

  constructor(private service: CharacteresService) {}

  load(): void {
    this.sinc();
  }

  refresh(): void {
    this.sinc();
  }

  sinc(): void {
    this.subSink.add(
      this.form.valueChanges.subscribe(v => this.loadCharacter(v))
    );
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  private loadCharacter(id: string): void {
    this.service.loadCharacter(id);
  }
}
