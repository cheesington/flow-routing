Package.describe({
  name: 'useraccounts:flow-routing',
  summary: 'UserAccounts package providing routes configuration capability via ostrio/flow-router-extra.',
  version: '1.14.2_2',
  git: 'https://github.com/cheesington/flow-routing.git',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.5');

  api.use([
    'check',
    'ostrio:flow-router-extra',
    'underscore',
    'ecmascript',
    'useraccounts:core',
    'modules'
  ], ['client', 'server']);

  api.imply([
    'ostrio:flow-router-extra@3.7.3_1',
    'useraccounts:core@1.14.2',
  ], ['client', 'server']);

  api.use([
     'react@15.0.1',
     'kadira:blaze-layout@2.3.0',
     'gadicc:blaze-react-component@1.4.0'
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
