/**
 * Mock Service/API
 */
App.service('SongService', function () {
    let songDatabase = {
        "songs":[
           {
              "title":"1904",
              "artist":"The Tallest Man on Earth",
              "year":"2012"
           },
           {
              "title":"#40",
              "artist":"Dave Matthews",
              "year":"1999"
           },
           {
              "title":"40oz to Freedom",
              "artist":"Sublime",
              "year":"1996"
           },
           {
              "title":"#41",
              "artist":"Dave Matthews",
              "year":"1996"
           },
           {
              "title":"American Girl",
              "artist":"Tom Petty",
              "year":"1977"
           },
           {
              "title":"American Music",
              "artist":"Violent Femmes",
              "year":"1991"
           },
           {
              "title":"American Pie",
              "artist":"Don McLean",
              "year":"1972"
           },
           {
              "title":"And it Stoned Me",
              "artist":"Van Morrison",
              "year":"1970"
           },
           {
              "title":"A Sailor's Christmas",
              "artist":"Jimmy Buffett",
              "year":"1996"
           },
           {
              "title":"Badfish",
              "artist":"Sublime",
              "year":"1996"
           },
           {
              "title":"Banana Pancakes",
              "artist":"Jack Johnson",
              "year":"2005"
           },
           {
              "title":"Barefoot Children",
              "artist":"Jimmy Buffett",
              "year":"1995"
           },
           {
              "title":"Big Parade",
              "artist":"The Lumineers",
              "year":"2012"
           },
           {
              "title":"Brown Eyed Girl",
              "artist":"Van Morrison",
              "year":"1967"
           },
           {
              "title":"Cape Canaveral",
              "artist":"Conor Oberst",
              "year":"2008"
           },
           {
              "title":"Carry On",
              "artist":"fun.",
              "year":"2012"
           },
           {
              "title":"Catch the Wind",
              "artist":"Donovan",
              "year":"1965"
           },
           {
              "title":"Cat's in the Cradle",
              "artist":"Harry Chapin",
              "year":"1974"
           },
           {
              "title":"Changes in Latitudes, Changes in Attitudes",
              "artist":"Jimmy Buffett",
              "year":"1977"
           },
           {
              "title":"Classy Girls",
              "artist":"The Lumineers",
              "year":"2012"
           },
           {
              "title":"Creep",
              "artist":"Radiohead",
              "year":"1993"
           },
           {
              "title":"Danny Boy",
              "artist":"Johnny Cash",
              "year":"2002"
           },
           {
              "title":"Darkness Between the Fireflies",
              "artist":"Mason Jennings",
              "year":"1997"
           },
           {
              "title":"Dead Sea",
              "artist":"The Lumineers",
              "year":"2012"
           },
           {
              "title":"Distantly in Love",
              "artist":"Jimmy Buffett",
              "year":"1983"
           },
           {
              "title":"Don't Leave Me (Ne Me Quitte Pas)",
              "artist":"Regina Spektor",
              "year":"2012"
           },
           {
              "title":"Don't Look Back in Anger",
              "artist":"Oasis",
              "year":"1996"
           },
           {
              "title":"Don't Stop Believin'",
              "artist":"Journey",
              "year":"1981"
           },
           {
              "title":"Doomsday",
              "artist":"Elvis Perkins",
              "year":"2009"
           },
           {
              "title":"Do You Remember",
              "artist":"Jack Johnson",
              "year":"2005"
           },
           {
              "title":"Drink the Water",
              "artist":"Jack Johnson",
              "year":"2001"
           }
        ]
     };

    this.get = () => {
        return Promise.resolve(songDatabase);
    };

    this.delete = (song) => {
        songDatabase.songs = songDatabase.songs.filter(function(item) {
            return (item.title !== song.title) 
                || (item.artist !== song.artist)
                || (item.year !== song.year);
        });
        return Promise.resolve();
        
    };
});
