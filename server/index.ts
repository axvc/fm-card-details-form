const path = require('path');

const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');

const app = new Koa();

const static_pages = new Koa();
static_pages.use(
  serve(path.resolve(__dirname, '../build')),
  serve(path.resolve(__dirname, '../public')),
);
app.use(mount('/', static_pages));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/',
    PORT,
    PORT,
  );
});
