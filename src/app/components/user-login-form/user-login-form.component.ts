import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-user-login-form',
  styleUrls: ['./user-login-form.component.scss'],
  templateUrl: './user-login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginFormComponent {
  readonly userLoginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private _userLoginService: UserLoginService) {
  }

  onUserLoginFormSubmitted(userLoginForm: FormGroup): void {
    this._userLoginService.create(userLoginForm.getRawValue()).subscribe();
  }
}
