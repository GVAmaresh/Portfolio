export interface UserState {
  userName: string | null;
  userPhoto: string | null;
  loading: boolean;
  error: string | null;
}

export interface UserDetails {
  userName: string;
  userPhoto: string;
}
