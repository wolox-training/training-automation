
import { VAR } from '../const/constants';

export const IDs = {
  idSingIn: 'a[href*="#login"]',
  idSingUp:  'a[href*="/register"]',
  name: 'input[formcontrolname*="username"]',
  email: 'input[formcontrolname*="email"]',
  password: 'input[formcontrolname*="password"]',
  btnSingUp: 'button[type*="submit"]',
  nameProfile: `a[href*="/profile/${VAR.name}"]`,
  errorRegister: 'error-messages'
};
