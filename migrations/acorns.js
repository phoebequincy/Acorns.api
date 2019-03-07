'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('acornsdb', (table) => {
    table.increments() // id
    table.string('title').notNullable()
    table.string('category').notNullable()
    table.text('content').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('acornsdb')
}
