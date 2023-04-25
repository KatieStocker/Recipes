const db = require('../pool.js')
const query = require('./sqlQueries.js');

const getTags = (req, res) => {
    db.query(`${query.selectAllFrom} tag`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

module.exports = {
    getTags,
}