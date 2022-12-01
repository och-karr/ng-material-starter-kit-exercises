export interface PublicHolidayModel {
  readonly date: string;
  readonly localName: string;
  readonly name: string;
  readonly countryCode: string;
  readonly fixed: boolean;
  readonly global: boolean;
  readonly counties: Array<string>;
  readonly launchYear: number;
  readonly type: string;
}
