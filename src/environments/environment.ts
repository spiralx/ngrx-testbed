// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  apiLocation: 'http://seedlegals.local:5001/',

  s3Location: 'https://s3-eu-west-1.amazonaws.com/seedlegals-assets-dev',

  companyNoPicture: 'company-nopic-168.png',

  userNoPicture: 'user-nopic-180.png',
}
