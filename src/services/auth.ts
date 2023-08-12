import { useUserSession } from "../stores/userSession";
import { AxiosResponse } from "axios";

export interface ILoginData {
  accessToken: string;
  expiresIn: number;
  notBeforePolicy: number;
  refreshExpiresIn: number;
  refreshToken: string;
  scope: string;
  sessionState: string;
  tokenType: "Bearer";
}

import ApiService from "./api";
class AuthenticationError extends Error {
  constructor(public errorCode: number, message: string) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const AuthService = {
  /**
   * Login the user and store the access token to TokenService.
   *
   * @returns access_token
   * @throws AuthenticationError
   **/
  login: async function (userData: {
    username: string;
    password: string;
  }): Promise<ILoginData> {
    const requestData = {
      method: "post",
      url: "/user/login",
      data: userData,
    };
    try {
      ApiService.removeHeader();
      const response = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      ApiService.mount401Interceptor();

      return response.data;
    } catch (error: any) {
      throw new AuthenticationError(
        error?.code,
        error?.message
      );
    }
  },
  /**
   * Logout the current user by removing the token from storage.
   *
   * Will also remove `Authorization Bearer <token>` header from future requests.
   **/
  logout() {
    const userSession = useUserSession();
    // Remove the token and remove Authorization header from Api Service as well
    userSession.logoutUser();

    ApiService.removeHeader();
    ApiService.unmount401Interceptor();
  },
};

export { AuthService, AuthenticationError };
