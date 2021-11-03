const db = require("../db/connection");
const table = require('console.table');

const getDept = () => {
    return new Promise (function(resolve, reject) {
        const sql = `SELECT id AS "ID", dept_name AS Department FROM department ORDER BY id;`
        db.query(sql, (err, rows) => {
            if (err) {
                reject({ error: err.messsage });
                return;
            }
            resolve(rows)
        })
    })
}

const addDept = newDept => {
    return new Promise (function(resolve, reject) {
        const sql = `INSERT INTO department (dept_name) 
                        VALUES (?)`
        const params = [newDept.deptName]
        db.query(sql, params, (err, result) => {
            if (err) {
                reject({ error: err.message })
            } else {
                let successfulAdd =({
                    status: "success",
                    data: newDept.deptName
                })
                resolve(successfulAdd)
            }
        })
    })
}

const getDeptId = data => {
    return new Promise (function(resolve, reject) {
        const sql = `SELECT id FROM department WHERE dept_name = ?;`
        params = [data.deptName]
        db.query(sql, params, (err, result) => {
            if (err) {
                reject({ error: err.messsage });
            }
            data.id = result[0].id
            resolve(data)
        })
    })
}

module.exports = { getDept, addDept, getDeptId }