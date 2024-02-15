
interface LoginParams {
  email: string;
  password: string;
}

export async function login(params: LoginParams): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params.email === 'admin@admin.com' && params.password === 'admin123') {
        return resolve('mockJWTtoken');
      } else {
        return reject(new Error('Invalid credentials!'));
      }
    }, 2000);
  })
}