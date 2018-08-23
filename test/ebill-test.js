const KDNService = require('../lib').default;
const config = {
  EBusinessID: '1313781',
  AppKey: '43885024-7a5f-4901-a6d2-482c25bc0437',
};
const service = new KDNService(config);

let order = {
  ShipperCode: 'FAST',
  OrderCode: 'lz1003',
  PayType: 1,
  ExpType: '1',
  IsReturnPrintTemplate: '1',
  Receiver: {
    Name: '收件人',
    Mobile: '13800000000',
    ProvinceName: '上海',
    CityName: '上海市',
    ExpAreaName: '青浦区',
    Address: '中山路1号'
  },
  Sender: {
    Name: '发件人',
    Mobile: '13811111111',
    ProvinceName: '北京',
    CityName: '北京市',
    ExpAreaName: '朝阳区',
    Address: '朝阳大街1号'
  },
  Commodity: [
    {
      GoodsName: '衣服'
    }
  ]
};
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
service.makeEbill(order).then(result => {
  console.log('result: ', result);
}).catch( error => {
  console.log('error: ', error);
});
