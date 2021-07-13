const db = require('../../data/db-config')

module.exports = {
  getAll,
  getById,
  create
}

async const getAll = () => {
  // DO YOUR MAGIC
  const records = await db('cars')
  return records
}

async const getById = (id) => {
  // DO YOUR MAGIC
  const record = await db('cars').where('id', id).first()
  return record
}

async const create = (car) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(car)
  const newCar = await getById(id)
  return newCar
}
