module.exports = {
    development: {
        sequelize: {
            username: 'ajith',
            password: 'password',
            database: 'server',
            port: "3306",
            host: 'localhost',
            dialect: 'mysql',
            logging: 'console.log',
            logQueryParameters: true
        },
        // redis: {
        //   host: 'localhost',
        //   port: '6379',
        //   prefix: 'zoprent-keys-',
        //   expiry: 900
        // },
        api_root: 'api/v1',
        // vendorSearcher: {
        //   host: 'http://localhost:3000',
        //   url: '/api/search.json',
        //   searchDetail: '/api/details',
        //   reindex: '/api/reindex'
        // }
    },
    staging: {
        sequelize: {
            username: 'ajith',
            password: 'password',
            database: 'server',
            port: "3306",
            host: 'localhost',
            dialect: 'mysql',
            logging: 'console.log',
            logQueryParameters: true
        },
        api_root: 'api/v1',
        // vendorSearcher: {
        //   host: 'http://localhost:7000',
        //   url: '/api/search.json',
        //   searchDetail: '/api/details',
        //   reindex: '/api/reindex'
        // }
    },
    production: {
        sequelize: {
            username: 'ajith',
            password: 'password',
            database: 'server',
            port: "3306",
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 25
            },
            logging: 'console.info',
            logQueryParameters: true
        },
        // redis: {
        //   host: 'localhost',
        //   port: '6379',
        //   prefix: 'zoprent-keys-',
        //   expiry: 900
        // },
        api_root: 'api/v1',
        // vendorSearcher: {
        //   host: 'http://139.59.6.10',
        //   url: '/api/search.json',
        //   searchDetail: '/api/details',
        //   reindex: '/api/reindex'
        // }
    }
}