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
                src: 'goforaride',
                altText: "Grab your bike and head out for a quick ride, even if it's just around the block.",
                header: "Go for a ride.",
                caption: "Grab your bike and head out for a quick ride, even if it's just around the block.",
              },
              {
                id: 2,
                title: "Get outside.",
	              category: "Nature",
                content: "Spend 10 minutes someplace outside, where you can see the sky. Be still and listen.",
                src: 'getoutside',
                altText: "Spend 10 minutes someplace outside, where you can see the sky. Be still and listen.",
                header: "Get outside.",
                caption: "Spend 10 minutes someplace outside, where you can see the sky. Be still and listen.",

               },
              {
                id: 3,
                title: "Take a pajama walk.",
	              category: "Family",
                content: "Everyone get in pajamas and go for a quick walk before bed. Look at the stars, hold hands.",
                src: 'pajamawalk',
                altText: "Everyone get in pajamas and go for a quick walk before bed. Look at the stars, hold hands.",
                header: "Take a pajama walk.",
                caption: "Everyone get in pajamas and go for a quick walk before bed. Look at the stars, hold hands.",
               },
              {
                id: 4,
                title: "Thick, chunky, and soft.",
	              category: "Simple Comforts",
                content: "Put on a thick, cozy and most importantly, soft pair of socks. Don't got 'em? Go get a pair!",
                src: 'cozyfeet',
                altText: "Put on a thick, cozy and most importantly, soft pair of socks. Don't got 'em? Go get a pair!",
                header: "Thick, chunky, and soft.",
                caption: "Put on a thick, cozy and most importantly, soft pair of socks. Don't got 'em? Go get a pair!",
              },
              {
                id: 5,
                title: "Call a friend.",
	              category: "Friendship",
                content: "Call a friend. Just do it.",
                src: 'phone',
                altText: "Call a friend. Just do it.",
                header: "Get outside.",
                caption: "Call a friend. Just do it.",
               },
               {
                id: 6,
                title: "Soup's on!",
	              category: "Food",
                content: "Making soup is meditative and cutting fresh vegetables makes you feel like you're taking care of yourself.",
                src: 'soup',
                altText: "Making soup is meditative and cutting fresh vegetables makes you feel like you're taking care of yourself.",
                header: "Soup's on!",
                caption: "Making soup is meditative and cutting fresh vegetables makes you feel like you're taking care of yourself.",
               },
               {
                id: 7,
                title: "A blanket statement.",
	              category: "Simple Comforts",
                content: "Climb under a big heavy comforter, or soft, plush blanket. Take a nap.",
                src: 'nap',
                altText: "Climb under a big heavy comforter, or soft, plush blanket. Wrap it around you like a burrito and take a nap.",
                header: "A blanket statement.",
                caption: "Climb under a big heavy comforter, or soft, plush blanket. Take a nap.",
               },
               {
                id: 8,
                title: "Pretty little plants.",
	              category: "Simple Comforts",
                content: "Bring some green inside by getting a few succulents and planting them in little decorative ceramic bowls.",
                src: 'littleplants',
                altText: "Bring some green inside by getting a few succulents and planting them in little decorative ceramic bowls.",
                header: "Pretty little plants.",
                caption: "Bring some green inside by getting a few succulents and planting them in little decorative ceramic bowls.",
	             },
	             {
	              id: 9,
                title: "Hot and berry tasty.",
	              category: "Food",
                content: "Heat some cranberry juice and add a splash of lemon and a few slices of fresh ginger.",
                src: 'berrytasty',
                altText: "Heat some cranberry juice and add a splash of lemon and a few slices of fresh ginger.",
                header: "Hot and berry tasty.",
                caption: "Heat some cranberry juice and add a splash of lemon and a few slices of fresh ginger.",
	             },
               {
                id: 10,
                title: "Doing nothing is something.",
	              category: "Wisdom",
                content: "Give yourself permission to do nothing. Sometimes choosing not act is the best action you can take.",
                src: 'nothing',
                altText: "Give yourself permission to do nothing. Sometimes choosing not act is the best action you can take.",
                header: "Doing nothing is something.",
                caption: "Give yourself permission to do nothing. Sometimes choosing not act is the best action you can take.",
	             },
              ])
              .then(() => {
                return knex.raw("SELECT setval('acorns_id_seq', (SELECT MAX(id) FROM acorns));"
              )
          })
      })
  }
