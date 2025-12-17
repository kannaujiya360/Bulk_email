// src/lib/stores/auth.ts
import { writable } from "svelte/store";

export type User = {
  email: string;
};

export const authUser = writable<User | null>(null);
export const authLoading = writable<boolean>(true);
