export enum FLAGS {
  'DEFAULT',
  'LOGIN',
  'MFA',
  'SEC-UPDATE'
}

export const environment = {
  production: false,
  host: 'UAT',
  activatedFlags: [
    FLAGS.DEFAULT,
    FLAGS.LOGIN
  ]
};
