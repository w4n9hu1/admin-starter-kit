
interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    username: string;
    email: string;
  };
}

export async function login(params: LoginParams): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params.email === 'admin@ask.com' && params.password === 'admin123') {
        return resolve({
          token: 'token123456',
          user: {
            username: 'admin',
            email: 'admin@ask.com'
          }
        });
      } else {
        return reject(new Error('Invalid credentials!'));
      }
    }, 2000);
  })
}