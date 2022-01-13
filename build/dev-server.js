const bodyParser = require('body-parser');

function cleanCache(module) {
  const path = require.resolve(module);
  require.cache[path] = undefined;
}

function apiServer(req, res) {
  try {
    const mockJSModule = `../mock-data${req.path}.js`;
    // TODO: delete
    console.log('mockJS', mockJSModule);
    const dataJS = require(mockJSModule);
    res.json(dataJS(req.body, req.query, req.path));

    cleanCache(mockJSModule);
  } catch (e) {
    console.log(e);
    res.status(404).end();
  }
}

exports.install = function install(app) {
  app.use(bodyParser.json());
  app.post('/api/*', apiServer);
  app.get('/api/*', apiServer);
  app.put('/api/*', apiServer);
  app.delete('/api/*', apiServer);
  // app.use(bodyParser.json());
  // app.post('/', apiServer);
  // app.get('/', apiServer);
  // app.put('/', apiServer);
  // app.delete('/', apiServer);
};
