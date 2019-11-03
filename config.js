const CDN = {
  staticfile: 'cdn.staticfile.org', // for China users
  cloudflare: 'cdnjs.cloudflare.com' // for other users
};

const config = {
  port: 3000,
  cdn: CDN.staticfile,
  token: 'token'
};

module.exports = {
  config: config
};
