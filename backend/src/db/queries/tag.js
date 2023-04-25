const db = require('../pool.js')
const query = require('./sqlQueries.js');

const tagQueryString = `${query.selectAllFrom} tag`;

const getTags = (req, res) => {
    db.query(`${tagQueryString}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getTagById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${tagQueryString} ${query.where} id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

module.exports = {
    getTags,
    getTagById,
}