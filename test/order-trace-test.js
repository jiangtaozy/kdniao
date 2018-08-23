const KDNService = require('../lib').default;
const config = {
  EBusinessID: '1313781',
  AppKey: '43885024-7a5f-4901-a6d2-482c25bc0437',
};
const service = new KDNService(config);
let order = {
  code: '887096739567779168',
  shipper: 'YTO'
};
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
service.makeOrderTrace(order).then(result => {
  console.log('result: ', result);
}).catch( error => {
  console.log('error: ', error);
});
