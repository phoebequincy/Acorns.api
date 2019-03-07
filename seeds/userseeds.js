'use strict'
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('acorn-usersdb').del()
      .then(function() {
          // Inserts seed entries
          return knex('acorn-usersdb').insert(
            [
              {
                id: 1,
                username: "Phoebe",
	              first_name: "Phoebe",
                last_name: "Quincy",
                email: "phoebequincy@gmail.com ",
                icon: 'public/images/perky.png'
              },
              {
                id: 2,
                username: "Lucy",
	              first_name: "Lucy",
                last_name: "Quincy",
                email: "naturegirl232@gmail.com ",
                icon: 'public/images/chilling.png',
               },
               {
                id: 3,
                username: "Poppy",
	              first_name: "Poppy",
                last_name: "Quincy",
                email: "pqcat919@icloud.com",
                icon: 'public/images/balloon.png',
               },
             }])
              .then(() => {
                return knex.raw("SELECT setval('acorn-usersdb_id_seq', (SELECT MAX(id) FROM acorn-usersdb));"
              )
          })
      })
  }
