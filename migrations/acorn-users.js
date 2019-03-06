'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('acorn-usersdb', (table) => {
    table.increments() // id
    table.string('username').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.url('icon').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('acorn-usersdb')
}
