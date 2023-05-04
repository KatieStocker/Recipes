const db = require('../pool.js')
const query = require('./sqlQueries.js');

const table = 'category_group_option'
const selectString = `${query.selectAllFrom} ${table}`;
const whereParam = `${query.where} ${table}.id = $1`

const getCategoryGroupOptions = (req, res) => {
    db.query(`${selectString}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getCategoryGroupOptionById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${selectString} ${whereParam}`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getCategoryGroupOptionByGroupId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${selectString} ${query.where} ${table}.category_group_id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getCategoryGroupOptionByOptionId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${selectString} ${query.where} ${table}.category_option_id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getCategoryGroupOptions,
    getCategoryGroupOptionById,
    getCategoryGroupOptionByGroupId,
    getCategoryGroupOptionByOptionId,
}