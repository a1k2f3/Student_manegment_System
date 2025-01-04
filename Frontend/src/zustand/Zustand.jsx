// src/store/useLoginStore.js
import { create } from 'zustand';

const useLoginStore = create((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));
export default useLoginStore;