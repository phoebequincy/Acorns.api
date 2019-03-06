'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('acornsdb', (table) => {
    table.increments() // id
    table.string('title').notNullable()
    table.string('category').notNullable()
    table.text('content').notNullable()
    table.text('symptomatic_experience').notNullable()
    table.text('mindful_ways').notNullable()
    table.boolean("is_favorite").notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('acornsdb')
}
