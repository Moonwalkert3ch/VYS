const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrvysapp4f9fe = onRequest({"region":"us-central1"}, (req, res) => server.then(it => it.handle(req, res)));
  