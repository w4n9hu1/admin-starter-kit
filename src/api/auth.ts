import axios from "axios";

const FAKE_USER = {
  username: 'admin',
  email: 'admin@ask.com'
}
const FAKE_SIDEBARITEMS: SidebarItem[] = [
  { group: 'Accounts', title: 'User Management', path: '/task' },
  { group: 'Accounts', title: 'Role Management', path: '/user' },
  { group: 'Tasks', title: 'Task List', path: '/task' },
];

export async function login(params: LoginParams): Promise<AccessTokenResponse> {
  try {
    var response = await axios.post('https://localhost:7199/login', params);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data);
    }
    throw error;
  }
}


export async function getUserAuthConfig(token: string): Promise<UserAuthConfig> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token == token) {
        return resolve({
          userInfo: FAKE_USER,
          sidebarItems: FAKE_SIDEBARITEMS,
          companyName: 'Admin Starter Kit'
        });
      } else {
        return reject(new Error('Invalid credentials!'));
      }
    }, 2000);
  })
}