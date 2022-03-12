const  Mock = require('mockjs')
const Random = Mock.Random
const data = Mock.mock({
    'shopMsg|5':[{  'id':Random.natural(),
                    'title':Random.csentence( 8, 25 ),
                    'houseType':Random.csentence( 9, 16 ),
                    'price': Random.float(9,9999,2,2),
                    'rentType': Random.csentence(2),
                    'img': Random.image('375x281')
}
    ]})
    module.exports=data