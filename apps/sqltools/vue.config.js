const path = require('path')
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@shared": path.resolve(__dirname, '../../shared/src')
      }
    },
    externals: {
      // Possible drivers for knex - we'll ignore them
      'sqlite3': 'sqlite3',
      'mariasql': 'mariasql',
      'mssql': 'mssql',
      'mysql': 'mysql',
      'mysql2': 'mysql2',
      'oracle': 'oracle',
      'strong-oracle': 'strong-oracle',
      'oracledb': 'oracledb',
      'pg': 'pg',
      'pg-query-stream': 'pg-query-stream'
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/m[sy]sql2?|oracle(db)?|sqlite3|mariadb|pg|pg-query-stream/, "node-noop"),
    ]
  }
}