export default function logger(req, res, next) {
  console.log(req);
  console.log(`${req.method} ${req.url}`);
  next();
}