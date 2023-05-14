module.exports = (config) => ({
  // The name to display on the sign in form (e.g. 'Sign in with...')
  name: 'Credentials',
  // The credentials is used to generate a suitable form on the sign in page.
  // You can specify whatever fields you are expecting to be submitted.
  // e.g. domain, username, password, 2FA token, etc.
  // You can pass any HTML attribute to the <input> tag through the object.
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'user' },
    password: { label: 'Password', type: 'password' },
  },
  config,
});
