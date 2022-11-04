export interface IAuthLogin {
  name: string;
  email?: string;
}
export type IAuthUpdate = IAuthLogin;

export interface IUserResponse extends IAuthLogin {
  id: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUserResponse;
}
