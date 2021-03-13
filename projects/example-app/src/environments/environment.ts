export enum FLAGS {
  'DEFAULT',
  'LOGIN',
  'MFA',
  'SECUPDATE',
  'SHIELDING'
}

export const environment = {
  production: false,
  host: 'UAT',
  activatedFlags: [
   // FLAGS.DEFAULT,
    FLAGS.LOGIN,
    FLAGS.MFA,
    FLAGS.SECUPDATE,
    FLAGS.SHIELDING
  ]
};
