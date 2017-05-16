const router = require('express').Router;
const LoginToken = require('../models/LoginToken');
const mailUtil = require('../utils/mail');
const errorUtil = require('../utils/error');

// Create a new router
const authRouter = router();

// Handle POST /api/auth/login
authRouter.post('/auth/login', (req, res) => {
  req.checkBody('email', 'Invalid email').notEmpty().isEmail();

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      res.status(400).json({
        type: 'validationError',
        errors: result.array(),
      });

      return;
    }

    const email = req.body.email;
    const loginToken = new LoginToken({ email });

    loginToken.save()
    .then(() => {
      mailUtil.sendLogin(email, loginToken.token)
      .then(() => {
        res.json({});
      })
      .catch((error) => {
        errorUtil.respond500(res, error, 'Unable to send login email');
      });
    })
    .catch((error) => {
      errorUtil.respond500(res, error, 'Unable to generate login token');
    });
  });
});

// Handle GET /api/auth/token
// Exchange the loginToken from a login email for an auth token
authRouter.get('/auth/token', (req, res) => {
  // NOTE: Security by obscurity:
  // "t" = "token" (e.g. localhost/api/auth/token?t=12345)
  const { t } = req.query;

  if (!t) {
    errorUtil.respond400(res, {}, 'Missing login token');
    return;
  }

  res.json({});
});

module.exports = authRouter;