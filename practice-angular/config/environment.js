const port = process.env.port || 4000;
const dbUri = process.env.MONGODB || 'mongodb://localhost/fish';

module.exports = {
  port, dbUri
};
