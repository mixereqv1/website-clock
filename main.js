const timeApp = {
    clock: document.getElementById('clock'),

    showCurrentTime: function(){
        let currentTime = new Date();

        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();

        if(hours < 10){ hours = '0' + hours; }
        if(minutes < 10){ minutes = '0' + minutes; }
        if(seconds < 10){ seconds = '0' + seconds; }

        clock.innerText = hours + ':' + minutes + ':' + seconds;
    },

    updateClock: function(){
        let image = document.getElementById('text-image');
        let img = document.getElementById('clock-image');
        let time = new Date().getHours();
        if(time >= 6 && time < 12 ){
            image.innerText = 'Good morning!';
            img.src = 'img/sunrise.jpg';
        } else if(time >= 12 && time < 18){
            image.innerText = 'Good afternoon!';
            img.src = 'img/noon.jpg';
        } else if(time >= 18 && time < 24){
            image.innerText = 'Good evening!';
            img.src = 'img/sunset.jpg';
        } else{
            image.innerText = 'Good night!';
            img.src = 'img/moon.jpg';
        }
    },

    init: function(){
        setInterval(this.showCurrentTime,1000);
        setInterval(this.updateClock,1000);
    }
}

timeApp.init();