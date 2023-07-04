export class AuthResponseDto {
  constructor(
    public isAuthSuccessful: boolean,
    public errorMessage: string,
    public token: string
  ) {}
}
