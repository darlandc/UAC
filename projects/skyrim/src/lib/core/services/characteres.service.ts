import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, filter, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacteresService {

  private url = `https://rickandmortyapi.com/api/character/`;
  private selectedCharacterId = new BehaviorSubject<string>(null);
  public loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  character$ = this.selectedCharacterId.pipe(
    filter(Boolean),
    switchMap(id => this.getCharacters(id as string)),
    shareReplay(1)
  );

  getCharacters(id: string): Observable<any>  {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  loadCharacter(id: string): any {
    this.selectedCharacterId.next(id);
  }

}
