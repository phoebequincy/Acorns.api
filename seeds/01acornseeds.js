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
                title: "Go for a ride",
	              category: "Recreation",
                content: "Grab your bike and head out for a quick ride, even if it's just around the block.",
                src: "/images/goforaride.jpg",
              },
              {
                id: 2,
                title: "Get outside",
	              category: "Nature",
                content: "Spend 10 minutes someplace outside, where you can see the sky. Be still and listen.",
                src: "/images/getoutside.jpg",
               },
              {
                id: 3,
                title: "Pajama walk",
	              category: "Family",
                content: "Everyone get in pajamas and go for a quick walk before bed. Look at the stars, hold hands.",
                src: "/images/pajamawalk.jpg",
               },
              {
                id: 4,
                title: "Cozy and soft",
	              category: "Simple Comforts",
                content: "Put on a thick, warm and most importantly, soft pair of socks. Don't got 'em? Go get a pair!",
                src: "/images/cozyfeet.jpg",
              },
              {
                id: 5,
                title: "Call a friend",
	              category: "Friendship",
                content: "It's easy to hermit. Connect to positive energy by calling a friend that makes you laugh.",
                src: "/images/phone.jpg",
               },
               {
                id: 6,
                title: "Soup's on!",
	              category: "Food",
                content: "Making soup is meditative and cutting fresh vegetables makes you feel like you're taking care of yourself.",
                src: "/images/soup.jpg",
               },
               {
                id: 7,
                title: "Blanket statement",
	              category: "Simple Comforts",
                content: "Climb under a big heavy comforter, or soft, plush blanket. Take a nap.",
                src: "/images/nap.jpg",
               },
               {
                id: 8,
                title: "A spot of green",
	              category: "Simple Comforts",
                content: "Bring some green inside by getting a few succulents and planting them in little decorative ceramic bowls.",
                src: "/images/littleplants.jpg",
	             },
	             {
	              id: 9,
                title: "Berry tasty",
	              category: "Food",
                content: "Heat some cranberry juice and add a splash of lemon and a few slices of fresh ginger.",
                src: "/images/berrytasty.jpg",
	             },
               {
                id: 10,
                title: "Nothing is something",
	              category: "Wisdom",
                content: "Give yourself permission to do nothing. Sometimes choosing not act is the best action you can take.",
                src: "/images/nothing.jpg",
	             },
               {
                id: 11,
                title: "What if...",
	              category: "Wisdom",
                content: "...everything you're going through is preparing you for what you asked for?",
                src: "/images/whatif.jpg",
	             },
               {
                id: 12,
                title: "Apple a day...",
	              category: "Food",
                content: "Make some apple crumble tonight. For a twist, add a pinch of freshly grated ginger.",
                src: "/images/applecrumble.jpg",
	             },
               {
                id: 13,
                title: "Hot soak",
	              category: "Simple Comforts",
                content: "Draw a really hot bath, throw in some epsom salts and essential oils like lavender, tangerine and balsam fir.",
                src: "/images/hotbath.jpg",
	             },
               {
                id: 14,
                title: "Bullet journal",
	              category: "Wisdom",
                content: "Take stock of where you've been, where you are, and where you're going. Start a bullet journal.",
                src: "/images/bulletjournal2.jpg",
	             },
               {
                id: 15,
                title: "Social moment",
	              category: "Friendship",
                content: "Do one social thing this week. Get breakfast or coffee with a friend or two.",
                src: "/images/besocial.jpg",
	             },
               {
                id: 16,
                title: "Art therapy",
	              category: "Creativity",
                content: "Get to your local paint-your-own-pottery studio and make some cool mugs. Start a collection.",
                src: "/images/arttherapy2.jpg",
	             },
               {
                id: 17,
                title: "Animal love",
	              category: "Nature",
                content: "Find some time with an animal - whether it's yours or someone else's... ",
                src: "/images/animallove.jpg",
	             },
               {
                id: 18,
                title: "Try something new",
	              category: "Recreation",
                content: "Stretch yourself and learn a new sport or activity. You'll make new connections too!",
                src: "/images/somethingnew2.jpg",
	             },
               {
                id: 19,
                title: "Sunday dinner",
	              category: "Family",
                content: "Bring back Sunday dinner! Get the children involved. Not close to family? Grab some friends instead.",
                src: "/images/sundaydinner.jpg",
	             },
               {
                id: 20,
                title: "Change of scene",
	              category: "Recreation",
                content: "Even if you just drive to the next town, get out and look at something different. Explore.",
                src: "/images/changeofscene.jpg",
	             },
              ])
              .then(() => {
                return knex.raw("SELECT setval('acorns_id_seq', (SELECT MAX(id) FROM acorns));"
              )
          })
      })
  }
