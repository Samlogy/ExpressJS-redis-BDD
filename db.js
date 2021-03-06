const redis = require('redis');

// Redis as a BDD
let bdd = redis.createClient();

bdd.on('connect', () => {
  console.log('Connected to Redis...');
}).on('error', (err) => {
  console.log(`Error: ${err}`);
});

module.exports = bdd;