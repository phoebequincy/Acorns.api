'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('acorns', (table) => {
    table.increments() // id
    table.string('title').notNullable()
    table.string('category').notNullable()
    table.text('content').notNullable()
    table.string('src').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('acorns')
}
