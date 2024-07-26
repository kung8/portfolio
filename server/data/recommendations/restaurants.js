module.exports = {
    category: "Restaurants",
    // how to handle the ratings: 
    /* 
        service:
            1 - 30+ minute wait, the service is slow
            2 - A really long (20 - 30 minute), the service is slow
            3 - A longer wait (10 - 20 minutes), the service is reasonable
            4 - Maybe a short wait (5 - 10 minutes), but once you're seated, the service is quick
            5 - Easy to get a table, quick service, and easy to wave down the waiter/waitress 
        food:
            1 - Terrible, I would never go back, sick after eating
            2 - Average
            3 - Pretty good most of the time
            4 - Most of the time the food is delicious
            5 - Every time the food is delicious each time I go (especially ordering different dishes)
        atmosphere:
            1 - Disgusting decorations or music or layout
            2 - Off-putting decorations or music or layouts
            3 - Weird decorations or music or layout that distracts from the food/theme
            4 - A bit loud, but can still carry on a conversation, and the decorations kind of fit with the theme/food, layout is okay 
            5 - Music and decorations fits with the theme/food, not too loud/can carry on a conversation, layout is nice 
        price:
            1 - $25 or more
            2 - $20 to $25
            3 - $15 to $20
            4 - $12 to $15
            5 - $12 or less
        based on the main dish

        rating: {
            service: 0,
            food: 0,
            atmosphere: 0,
            price: 0
        }
    */
    recommendations: [
        {
            title: "Gourmandise The Bakery",
            location: "American Fork, UT",
            items: [
                {
                    item: "Blueberry Grilled Cheese",
                    source: "Rhiannon Sanderson"
                }
            ]
        },
        {
            title: "(Filipino Restaurant in Provo)",
            location: "Provo, UT",
            items: [
                {
                    item: "",
                    source: "Brianna Gee"
                }
            ]
        },
    ],
    reviews: [
        {
            title: "Asa Ramen",
            location: "Orem, UT",
            feedback: [
                "Probably the best ramen I've had in Utah County. The broth is flavorful. It's usually pretty busy especially on the weekends, so expect a wait. The ramen itself is so filling that you shouldn\'t need any appetizers. I have had their gyozas and their karaage chicken, good but nothing spectacular.",
            ],
            image: "",
            rating: {
                service: 4,
                food: 5,
                atmosphere: 4,
                price: 5
            }
        },
        {
            title: "Haku Ramen",
            location: "American Fork, UT",
            feedback: [
                "I love the ramen here. I have gotten two different kinds - Haku and the Miso. The noodles are interchangeable, so if you want more of the Haku broth but the yellow thicker noodles you can do that. By this point I have been there about 7 or 8 times, and one experience the food was okay so that's why I am giving it a 4. This still hits the spot if you want good ramen. It's closer to where I live so I come here. It's not as busy and the service is probably much better here since it's not as busy. The ramen here is also filling that you wouldn't need any appetizers.",
                "If you decide to get the sushi here, it's pretty good. The char siu buns are delicious but messy and oily so be prepared."
            ],
            image: "",
            rating: {
                service: 5,
                food: 4,
                atmosphere: 5,
                price: 5
            },
        },
        {
            title: "Tsunami",
            location: "Lehi, UT",
            feedback: [
                "The price is pretty high but the sushi is delicious. So if you want to splurge on good sushi and don't mind the price, this is the place to go. The atmosphere is nice. I have been here a few times and have never been disappointed. It can cost between $35 - $60 per person for about 3 or 4 rolls. Even though it seems to be busy all the time, you are surprisingly able to hold conversations without yelling.",
            ],
            image: "",
            rating: {
                service: 3,
                food: 5,
                atmosphere: 5,
                price: 1
            }
        },
        {
            title: "Tapa Sushi",
            Location: "American Fork, UT",
            feedback: [
                "I have eaten here a few times (takeout and dine-in). The sushi is just a smidge cheaper than Tsunami, and the quality is almost just as good. I think I've liked all the ones that I have tried there. No reservations needed, pretty much always able to get a table."
            ],
            image: "",
            rating: {
                service: 5,
                food: 5,
                atmosphere: 4,
                price: 1
            }
        },
        {
            title: "Sushi Garden Bistro",
            location: "American Fork, UT",
            feedback: [
                "Mislead by the google map search for unlimited sushi. It's not unlimited sushi. But as far as cheaper, convenient sushi, it was fine."
            ],
            items: [
                { name: "Snowbird", thoughts: "" },
                { name: "Deja Vu", thoughts: "Both my brother's and my favorite roll." },
                { name: "Citrus", thoughts: "Like this one" },
                { name: "Tiger Eyes", thoughts: "" },
                { name: "Cowboy", thoughts: "Didn't like this one. It was weird to have steak in the sushi. I wouldn't get this one again." },
                { name: "Yellowtail Jalapeno", thoughts: "There wasn't a lot in it, but it was good." },
                { name: "California Girl", thoughts: "2nd favorite of the ones that we tried." },
            ],
            image: "",
            rating: {
                service: 5,
                food: 4,
                atmosphere: 4,
                price: 5
            }
        },
        {
            title: "Jim\'s Family Restaurant",
            location: "American Fork, UT",
            feedback: [
                "I liked the scones. The rest of the food was okay. I had gotten a burger and fries. Nothing special. We took it to go."
            ],
            image: "",
            rating: {
                service: 4,
                food: 3,
                atmosphere: 5,
                price: 5
            }
        },
        {
            title: "China Isle Restaurant",
            location: "American Fork, UT",
            feedback: [
                "The few times I have been here, the food was all right. It has never been busy. The decoration and atmosphere feels more of a Chinese restaurant. The portions are decent. Prices are average for other similar restaurants, averaging between 10 - 15."
            ],
            image: "",
            rating: {
                service: 5,
                food: 4,
                atmosphere: 5,
                price: 5
            }
        },
        {
            title: "Mi Ranchito",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Kitchen Eighty Eight",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Ganesh",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Rocky Mountain Wingshak",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Super Chix",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "MOD Pizza",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "R&R BBQ",
            location: "Lehi, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Don Joaquin Street Tacos",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Whistle Wok",
            location: "American Fork, UT",
            feedback: [
                "Tasted like the chow mein was just spaghetti with a mix of chow mein ingredients. Not authentic Chinese. You really got what you paid for - cheap food."
            ],
            image: "",
            rating: {
                service: 5,
                food: 1,
                atmosphere: 1,
                price: 5
            }
        },
        {
            title: "Slim Chickens",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "El Mexiquense Grill",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "La Fountain Mexican Restaurant",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Everbowl",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Thai Village",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Tamashi Ramen",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Marco's Pizza",
            location: "Cedar Hills, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Summit Pizza Co.",
            location: "Pleasant Grove, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Wok the Line",
            location: "Pleasant Grove, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Nazca Peruvian Cuisine",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Red Fuego",
            location: "Lehi, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Chubby's Cafe",
            location: "Pleasant Grove, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Wallabys Smokehouse",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Crust Club",
            location: "Pleasant Grove, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Village Baker",
            location: "Lehi, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Avenue Bakery",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Cupbop",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Pier 49 Pizza",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Pique Thai",
            location: "Highland, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Chom Burger",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "El Pollo Loco",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Cafe Namaste",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Hruska's Kolaches",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "East Moon Sushi & Grill",
            location: "Lehi, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Maria Bonita Mexican Restaurant",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Umami Japanese BBQ",
            location: "Vineyard, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Asado Argentinian Grill",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Zulu Piri Piri Chicken",
            location: "Lehi, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Don Joaquin Street Tacos",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Bombay House",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Chicken in the Kitchen",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Black Sheep Cafe",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Guru's Cafe",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Good Move Cafe",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "India Palace",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Pho Plus",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Malawi's Pizza",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "K's Kitchen",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Silver Dish Thai Cuisine",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Two Jack's Pizza",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Thai Hut",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Koko Lunchbox",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Five Sushi Brothers",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Seven Brothers",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Bok Bok Korean Fried Chicken",
            location: "Provo, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "King Buffet",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Zaab Sure Thai Cuisine",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Savory Thai",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Thai Evergreen",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Thai Drift",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "KOU Korean BBQ",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "KOU Korean BBQ",
            location: "Sandy, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Yamato Japanese Restaurant",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Via 313",
            location: "American Fork, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        {
            title: "Yummy's Korean BBQ",
            location: "Orem, UT",
            feedback: [
                ""
            ],
            image: ""
        },
        // {
        //     title: "",
        //     location: "Orem, UT",
        //     feedback: [
        //         ""
        //     ],
        //     image: ""
        // },
        // {
        //     title: "",
        //     location: "Orem, UT",
        //     feedback: [
        //         ""
        //     ],
        //     image: ""
        // },
        // {
        //     title: "",
        //     location: "Orem, UT",
        //     feedback: [
        //         ""
        //     ],
        //     image: ""
        // },
        // {
        //     title: "",
        //     location: "Orem, UT",
        //     feedback: [
        //         ""
        //     ],
        //     image: ""
        // },
        // {
        //     title: "",
        //     location: "Orem, UT",
        //     feedback: [
        //         ""
        //     ],
        //     image: ""
        // },
        // {
        //     title: "",
        //     location: "Orem, UT",
        //     feedback: [
        //         ""
        //     ],
        //     image: ""
        // },
        // {
        //     title: "",
        //     location: "Orem, UT",
        //     feedback: [
        //         ""
        //     ],
        //     image: ""
        // },
    ]
};