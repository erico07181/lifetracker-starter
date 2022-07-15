const express = require("express");
const User = require("../models/user");
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    const token = createUserJwt(user);
    res.locals.token = token;
    console.log(res.locals.token);
    return res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body);
    const token = createUserJwt(user);
    res.locals.token = token;

    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;

    const userEmail = await User.fetchUserByEmail(user.email);

    // const publicUser = User.makePublicUser(user);

    return res.status(200).json({ user: userEmail });
  } catch (err) {
    next(err);
  }
});

router.post(
  "/addExercise",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      const { user } = res.locals;
      const userExercise = await User.addExercise(req.body);
      return res.status(201).json({ userExercise });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
