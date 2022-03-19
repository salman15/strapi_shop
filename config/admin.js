module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5bfa8d89390f6a37f66d6d5d46e0ce27'),
  },
});
