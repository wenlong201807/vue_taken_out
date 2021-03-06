// 用mockjs模拟生成数据
var Mock = require('mockjs');

module.exports = () => {
    // 使用 Mock
    var data = Mock.mock({
        'test|3': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1000,
            name: '@ctitle(5,10)',
            author: '@cname',
            college: '@ctitle(6)',
            'category_Id|1-6': 1
        }]

    });
    // 返回的data会作为json-server的数据
    return data;
};