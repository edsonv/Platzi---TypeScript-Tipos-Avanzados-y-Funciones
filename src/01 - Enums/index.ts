export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const edsonUser: User = {
  username: 'Edson',
  role: ROLES.ADMIN,
};
