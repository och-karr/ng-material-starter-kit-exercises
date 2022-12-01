import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DogPictureModel} from "../models/dog-picture.model";

@Injectable()
export class DogPictureService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(breed: string): Observable<DogPictureModel> {
    return this._httpClient.get<DogPictureModel>(`https://dog.ceo/api/breed/${breed}/images/random`);

  }
}
