import { Component, OnInit } from '@angular/core';
import {Song} from "./model/song";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  public songs: Song[] = [];
  public timeout: any;
  public switchRandomRatingFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.songs = [{
      "name": "Alicia Keys",
      "single": "Underdog",
      "rating": 5,
      "coverUrl": "https://i.ibb.co/9NfsZgQ/alicia-keys.jpg",
      "color": "#2A8EB0"

    },
      {
        "name": "Ariana Grande",
        "single": "Put Your Hearts Up",
        "rating": 7,
        "coverUrl": "https://i.ibb.co/fxKWK1G/ariana-grandes.jpg",
        "color": "#D29602"
      },
      {
        "name": "Beyonce",
        "single": "Single Ladies",
        "rating": 4,
        "coverUrl": "https://i.ibb.co/FzH8DSS/beyonce.jpg",
        "color": "#2B5583"
      },
      {
        "name": "Billie Eilish",
        "single": "Ocean Eyes",
        "rating": 3,
        "coverUrl": "https://i.ibb.co/bgKJdvR/billie-eilish.jpg",
        "color": "#678A08"
      },
      {
        "name": "Ed Sheeran",
        "single": "Shape of You",
        "rating": 4,
        "coverUrl": "https://i.ibb.co/q0sb9Bq/ed-sheeran.jpg",
        "color": "#F4890E"
      },
      {
        "name": "Jay Z",
        "single": "Wishing on a Star",
        "rating": 5,
        "coverUrl": "https://i.ibb.co/ykK1ZVw/jay-z.jpg",
        "color": "#292722"
      },
      {
        "name": "Lady Gaga",
        "single": "Stupid Love",
        "rating": 9,
        "coverUrl": "https://i.ibb.co/dpZHnTs/lady-gaga.jpg",
        "color": "#F24074"
      },
      {
        "name": "Norah Jones",
        "single": "I'm Alive",
        "rating": 8,
        "coverUrl": "https://i.ibb.co/DkKpLhC/norah-jones.jpg",
        "color": "#747089"
      },
      {
        "name": "Idan Raichel",
        "single": "Beresheet",
        "rating": 9,
        "coverUrl": "https://i.ibb.co/9n7MQ4L/idan-raichel.jpg",
        "color": "#772500"
      },
      {
        "name": "Robbie Williams",
        "single": "Love My Life",
        "rating": 4,
        "coverUrl": "https://i.ibb.co/2tj1KM0/robbie-williams.jpg",
        "color": "#63022B"
      },
      {
        "name": "Tones and I",
        "single": "Dance Monkey",
        "rating": 10,
        "coverUrl": "https://i.ibb.co/MRJjdjs/tones-and-i.jpg",
        "color": "#D62C01"
      }]

    this.sortSongsByRate();
  }

  sortSongsByRate() {
    this.songs.sort(function (a,b) {
      return b.rating - a.rating
    });
  }

  randomSongsRate() {
    var rand = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    this.songs[rand].rating = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    console.log(this.songs[rand].rating);





    this.sortSongsByRate()
  }

  randomSongsRateStart() {
    this.switchRandomRatingFlag = false;
    var myFunction = () => {
      this.randomSongsRate();
      var rand = Math.round(Math.random() * (5000 - 500)) + 500; // generate new time (between 3sec and 500"s)
      this.timeout = setTimeout(myFunction, rand);

    }
    myFunction();

  }

  randomSongsRateStop() {
    clearTimeout(this.timeout);
    this.switchRandomRatingFlag = true;
  }

  updateRating(song: Song, songRating: any) {
    song.rating = songRating;
    this.sortSongsByRate();

  }

}
