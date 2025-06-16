import Firestore from '@google-cloud/firestore';
import * as functions from '@google-cloud/functions-framework';

const firestore = new Firestore({preferRest: true});

// Pre-warm firestore connection pool, and preload our global config
// document in cache. In order to ensure no other request comes in,
// block the module loading with a synchronous global request:
const config = await firestore.collection('collection').doc('config').get();

functions.http('fetch', (req, res) => {

// Do something with config and firestore client, which are now preloaded
// and will execute at lower latency.
});