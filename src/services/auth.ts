import axios from "axios";

export async function login(params: LoginParams): Promise<AccessTokenResponse> {
  console.log(params);
  const loginResponse = await axios.get('http://localhost:3000/login');
  return loginResponse.data;
}

export async function getUserAuthConfig(token: string): Promise<AuthUserInfo> {
  console.log(token);
  const userAuthConfig = await axios.get('http://localhost:3000/authUserInfo');
  return userAuthConfig.data;
}