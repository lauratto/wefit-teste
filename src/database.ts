module.exports = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'senha_root_123',
        database: 'wefit',
        port: 3306
    },
    pool: {
        min: 2,
        max: 10, 
    }
};

  