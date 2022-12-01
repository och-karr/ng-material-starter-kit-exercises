import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, switchMap } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { UserModel } from "../../models/user.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  readonly details$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._userService.getOne(data['id'])));
  constructor(private _userService: UserService, private _activatedRoute: ActivatedRoute) {
  }
}
