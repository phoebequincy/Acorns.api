'use strict'
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users_favorites').del()
      .then(function() {
          // Inserts seed entries
          return knex('users_favorites').insert(
            [
              {
                id: 1,
                acorn_id: 1,
	              user_id: 1,
              },
              {
                id: 2,
                acorn_id: 2 ,
	              user_id: 1,
               },
             ])
              .then(() => {
                return knex.raw("SELECT setval('users_favorites_id_seq', (SELECT MAX(id) FROM users_favorites))")
      })
    })
}
