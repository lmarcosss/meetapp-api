export default {
  dialect: 'postgres',
  database: 'meetapp',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
}
