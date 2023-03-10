// eslint-disable-next-line import/prefer-default-export
export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};
