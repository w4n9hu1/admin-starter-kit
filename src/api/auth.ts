const FAKE_TOKEN = 'token123456';
const FAKE_USER = {
  username: 'admin',
  email: 'admin@ask.com'
}
const FAKE_SIDEBARITEMS: SidebarItem[] = [
  { group: 'Accounts', title: 'User Management', path: '/task' },
  { group: 'Accounts', title: 'Role Management', path: '/user' },
  { group: 'Tasks', title: 'Task List', path: '/task' },
  { group: 'Tasks', title: 'Task Assignments ', path: '/user' },
];

export async function login(params: LoginParams): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params.email === 'admin@ask.com' && params.password === 'admin123') {
        return resolve({
          token: FAKE_TOKEN,
          user: FAKE_USER
        });
      } else {
        return reject(new Error('Invalid credentials!'));
      }
    }, 2000);
  })
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