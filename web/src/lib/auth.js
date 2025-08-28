import { api } from './api';

export async function login(email, password, remember = false) {
  await api.post('/login', { email, password, remember });
}

export async function logout() {
  await api.post('/logout');
}

export async function me() {
  try {
    const { data } = await api.get('/api/user');
    return data;
  } catch (e) {
    if (e.response?.status === 401) return null;
    throw e;
  }
}
