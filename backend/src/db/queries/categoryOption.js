const db = require('../pool.js')
const query = require('./sqlQueries.js');

const selectString = `${query.selectAllFrom} category_option`;
const whereParam = `${query.where} category_option.id = $1`

const getCategoryOptions = (req, res) => {
    db.query(`${selectString}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getCategoryOptionById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${selectString} ${whereParam}`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getCategoryOptions,
    getCategoryOptionById,
}