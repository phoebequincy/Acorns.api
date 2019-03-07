'use strict'
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('acornsdb').del()
      .then(function() {
          // Inserts seed entries
          return knex('acornsdb').insert(
            [
              {
                id: 1,
                title: "Go for a ride.",
	              category: "Recreation",
                content: "Grab your bike and head out for a quick ride, even if it's just around the block.",
              },
              {
                id: 2,
                title: "Get outside.",
	              category: "Nature",
                content: "Spend 10 minutes someplace outside, where you can see trees, grass, any kind of natural scenery, water or sky. Be still and listen.",
               },
              {
                id: 3,
                title: "Take a pajama walk.",
	              category: "Family",
                content: "Everyone get in pajamas and go for a quick walk before bed. Look at the stars, hold hands. Talk quietly, or don't talk.",
               },
              {
                id: 4,
                title: "Thick, chunky, and soft.",
	              category: "Simple Comforts",
                content: "Put on a thick, cozy and most importantly, soft pair of socks. Don't got 'em? Go get a pair!",
              },
              {
                id: 5,
                title: "Call a friend.",
	              category: "Friendship",
                content: "Sometimes when things get hard we want to withdraw and isolate ourselves. Give yourself permission to do that, but if it starts becoming the norm, call a friend. Just do it.",
               },
               {
                id: 6,
                title: "Yes, soup for you!",
	              category: "Food",
                content: "Make some soup tonight. Making soup can be meditative and cutting fresh vegetables makes you feel like you're taking care of yourself. Plus it tastes good and you'll have lunch for tomorrow!",
               },
               {
                id: 7,
                title: " ",
	              category: " ",
                content: " ",
               },
               {
                id: 8,
                title: " ",
	              category: " ",
                content: " ",
	             },
	             {
	              id: 9,
                title: "v",
	              category: " ",
                content: " ",
	             },
               {
                id: 10,
                title: " ",
	              category: " ",
                content: " ",
	             },
              }])
              .then(() => {
                return knex.raw("SELECT setval('acornsdb_id_seq', (SELECT MAX(id) FROM acornsdb));"
              )
          })
      })
  }
