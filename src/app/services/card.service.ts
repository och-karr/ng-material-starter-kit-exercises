import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CardModel} from "../models/card.model";

@Injectable()
export class CardService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<CardModel> {
    return this._httpClient.get<CardModel>(`https://fakestoreapi.com/carts/${id}`);
  }
}
