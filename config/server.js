module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '928bb5ddb1835c61fc1ef34d5b2a0d1a'),
    },
  },
});
