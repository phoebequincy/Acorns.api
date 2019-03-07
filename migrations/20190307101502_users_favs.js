'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('users_favorites', (table) => {
    table.increments(), // id
    table.string('acorn_id'),
    table.string('user_id'),
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users_favorites')
}
