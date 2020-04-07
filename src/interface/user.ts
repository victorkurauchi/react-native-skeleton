export interface AuthenticatedUser {
  username: string;
  identifier: string;
  name: {
    first: string;
    last: string;
    display: string;
  };
  email: string;
  roles: string[];
  groupes: string[];
  toggles: any;
}
