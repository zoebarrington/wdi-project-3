const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/filmSpotting';
const secret = process.env.SECRET || 'chris pine';


module.exports = {
  port: port,
  dbUri: dbUri,
  secret: secret
};
