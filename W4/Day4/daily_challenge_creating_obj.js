class Video{
    constructor (myTitle, myName, timeVideo) {
        this.title = myTitle;
        this.uploader = myName;
        this.time = timeVideo;
    }

    watch(){
        return (`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }

    
}

let myVideo = new Video('WOW', 'Maira', 60) 
let mySecond_Video = new Video ('BLABLA', 'Ziv', 30)
console.log(myVideo.watch())
console.log(mySecond_Video.watch())