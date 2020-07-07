import { VAR } from '../const/constants';

export const SELECTORS = {
  idSingIn: 'a[href*="#login"]',
  idSingUp:  'a[href*="/register"]',
  name: 'input[formcontrolname*="username"]',
  email: 'input[formcontrolname*="email"]',
  password: 'input[formcontrolname*="password"]',
  btnSingUp: 'button[type*="submit"]',
  profileName: `a[href*="/profile/${VAR.name}"]`,
  registerError: '.error-messages'
};
