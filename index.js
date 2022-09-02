const PORT = process.env.PORT || 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express')

const { get } = axios;
const app = express();

const sources = [
    {
        name: "NintendoLife",
        address: 'https://www.nintendolife.com/',
        base: 'https://nintendolife.com/'
    },
    {
        name: "NintendoNews",
        address: 'https://nintendonews.com/',
        base: 'https://nintendonews.com/'
    },
    {
        name: "MyNintendoNews",
        address: "https://mynintendonews.com/",
        base: ''
    },
    {
        name: "Kotaku",
        address: "https://kotaku.com/",
        base: ''
    },
    {
        name: "Comicbook",
        address: "https://comicbook.com/",
        base: ''
    },
    {
        name: "GameRant",
        address: "https://gamerant.com/",
        base: 'https://gamerant.com/'
    },
    {
        name: "NintendoEverything",
        address: "https://nintendoeverything.com/",
        base: ''
    },
    {
        name: "Polygon",
        address: "https://www.polygon.com/",
        base: 'https://www.polygon.com'
    },
    {
        name: "Gamespot",
        address: "https://www.gamespot.com/",
        base: 'https://www.gamespot.com'
    },
    {
        name: "GeeksAndGamers",
        address: "https://www.geeksandgamers.com/",
        base: ''
    },
    {
        name: "ign",
        address: "https://www.ign.com/",
        base: 'https://www.ign.com'
    },
    {
        name: "gamesradar",
        address: "https://www.gamesradar.com/",
        base: ''
    },
    {
        name: "PCGamer",
        address: "https://www.pcgamer.com/",
        base: ''
    },
    {
        name: "neoseeker",
        address: "https://www.neoseeker.com/",
        base: ''
    },
    {
        name: "giantbomb",
        address: "https://www.giantbomb.com/",
        base: ''
    },
]

const allArticles = [];
const zeldaArticles = [];
const marioArticles = [];
const metroidArticles = [];
const donkeyKongArticles = [];
const starWarsArticles = [];
const finalFantasyArticles = [];
const assassinsCreedArticles = [];
const tetrisArticles = [];
const theSimsArticles = [];
const grandTheftAutoArticles = [];
const callOfDutyArticles = [];
const pokemonArticles = [];
const sonicTheHedgehogArticles = [];
const megaManArticles = [];
const hollowKnightArticles = [];
const residentEvilArticles = [];
const silentHillArticles = [];
const leagueOfLegendsArticles = [];

//all articles
sources.forEach(source => {
    get(source.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("Zelda"), a:contains("Ocarina of Time"), a:contains("Mario"), a:contains("Super Mario"), a:contains("Metroid"), a:contains("Samus"), a:contains("Star Wars"), a:contains("Final Fantasy"), a:contains("Assassins Creed"), a:contains("Tetris"), a:contains("The Sims"), a:contains("Grand Theft Auto"), a:contains("GTA"), a:contains("Call of Duty"), a:contains("Sonic"), a:contains("Sonic the Hedgehog"), a:contains("Mega Man"), a:contains("Hollow Knight"), a:contains("Resident Evil"), a:contains("Silent Hill"), a:contains("League of Legends"), a:contains("Pokemon"), a:contains("Donkey Kong")', html).each(function (){
            const text = $(this).text().trim();
            const url = $(this).attr('href');

            allArticles.push({
                text,
                url: source.base + url,
                source: source.name,
                publication: source.address
            })
        })
    })
})
//zelda articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Zelda"), a:contains("Ocarina of Time")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');

                zeldaArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })
        })
})
//mario articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Mario"), a:contains("Super Mario")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                marioArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//metroid articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Metroid"), a:contains("Samus")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                metroidArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Donkey Kong articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Donkey Kong")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                donkeyKongArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Star Wars Articles
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Star Wars")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                starWarsArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Final Fantasy
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Final Fantasy")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                finalFantasyArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Assassin's Creed
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Assassin\'s Creed")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                assassinsCreedArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Tetris
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Tetris")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                tetrisArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//The Sims
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("The Sims")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                theSimsArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Grand Theft Auto
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Grand Theft Auto"), a:contains("GTA")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                grandTheftAutoArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Call of Duty
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Call of Duty")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                callOfDutyArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Pokemon
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Pokemon")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                pokemonArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
//Sonic the Hedgehog
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Sonic The Hedgehog"), a:contains("Sonic")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                sonicTheHedgehogArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
// //Mega Man
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Mega Man"), a:contains("Rock Man")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                megaManArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
// //Hollow Knight
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Hollow Knight"), a:contains("Silk Song")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                hollowKnightArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})
// //Resident Evil
sources.forEach(source => {
    get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            
            $('a:contains("Resident Evil"), a:contains("Biohazard")', html).each(function (){
                const text = $(this).text().trim();
                const url = $(this).attr('href');
                
                residentEvilArticles.push({
                    text,
                    url: source.base + url,
                    source: source.name,
                    publication: source.address
                })
            })


        })
})

//paths
app.get('/', (req, res) => {
    res.json('Welcome to my Gaming News API, go to /all to see the all news articles')
})

app.get('/all', (req, res) => {
    res.json(allArticles)
})

app.get('/zelda', (req, res) => {
    res.json(zeldaArticles)
})

app.get('/mario', (req, res) => {
    res.json(marioArticles)
})

app.get('/metroid', (req, res) => {
    res.json(metroidArticles)
})

app.get('/donkey_kong', (req, res) => {
    res.json(donkeyKongArticles)
})

app.get('/star_wars', (req, res) => {
    res.json(starWarsArticles)
})

app.get('/final_fantasy', (req, res) => {
    res.json(finalFantasyArticles)
})

app.get('/assassins_creed', (req, res) => {
    res.json(assassinsCreedArticles)
})

app.get('/tetris', (req, res) => {
    res.json(tetrisArticles)
})

app.get('/the_sims', (req, res) => {
    res.json(theSimsArticles)
})

app.get('/grand_theft_auto', (req, res) => {
    res.json(grandTheftAutoArticles)
})

app.get('/call_of_duty', (req, res) => {
    res.json(callOfDutyArticles)
})

app.get('/pokemon', (req, res) => {
    res.json(pokemonArticles)
})

app.get('/sonic_the_hedgehog', (req, res) => {
    res.json(sonicTheHedgehogArticles)
})

app.get('/mega_man', (req, res) => {
    res.json(megaManArticles)
})

app.get('/hollow_knight', (req, res) => {
    res.json(hollowKnightArticles)
})

app.get('/resident_evil', (req, res) => {
    res.json(residentEvilArticles)
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))