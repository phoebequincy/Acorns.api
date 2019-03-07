'use strict'
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('acorns').del()
      .then(function() {
          // Inserts seed entries
          return knex('acorns').insert(
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
                title: "A blanket statement.",
	              category: "Simple Comforts",
                content: "Climb under a big heavy comforter, or soft, plush blanket. Wrap it around you like a burrito and take a nap.",
               },
               {
                id: 8,
                title: "Pretty little plants.",
	              category: "Simple Comforts",
                content: "Bring some green inside by getting a few succulents and planting them in little decorative ceramic bowls. Put them next to the sink so you look on them when you're doing the dishes.",
	             },
	             {
	              id: 9,
                title: "Hot and berry tasty.",
	              category: "Food",
                content: "Heat some cranberry juice and add a splash of lemon and a few slices of fresh ginger, make it spicier with a tiny smidge of cayenne pepper.",
	             },
               {
                id: 10,
                title: "Doing nothing is something.",
	              category: "Wisdom",
                content: "Give yourself permission to not respond, do nothing, stay in. Sometimes choosing not act is the best action you can take.",
	             },
              ])
              .then(() => {
                return knex.raw("SELECT setval('acorns_id_seq', (SELECT MAX(id) FROM acorns));"
              )
          })
      })
  }
