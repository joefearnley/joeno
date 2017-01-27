'use strict';


const App = {
    currentDraw: 0,
    draws: [],
    start: function() {
        $('#content').load('templates/board.html');

        this.createGame();

        // now wait 3 minutes
        // should display a countdown in the UI
        setInterval(this.createGame.bind(this), 180000);

    },
    createGame: function() {
        let numbers = this.drawNumbers();
        let currentNumber = 1;
        console.log(numbers[currentNumber]);

        // display a number every 5 seconds.
        var interval = setInterval(function() {
            // grab next number in the draw
            console.log(numbers[currentNumber]);
            
            // clear the interval after 20 draws
            if (currentNumber == 20) {
                console.log('clearing interval');
                clearInterval(interval);
            }
            
            currentNumber++;
            
            
        }, 5000);
        
        console.log(numbers);
    },
    drawNumbers: function() {
        let numbers = Array();
        while(numbers.length <= 20) {
            let number = Math.floor(Math.random() * 81);
            if(!(number in numbers)) {
                numbers.push(number);
            }
        }

        let draw = [
            numbers[1],
            numbers[2],
            numbers[3],
            numbers[4],
            numbers[5],
            numbers[6],
            numbers[7],
            numbers[8],
            numbers[9],
            numbers[10],
            numbers[11],
            numbers[12],
            numbers[13],
            numbers[14],
            numbers[15],
            numbers[16],
            numbers[17],
            numbers[18],
            numbers[19],
            numbers[20]
        ];
        
        return draw;
    },
    updateNumber: function() {},
    showResults: function(draw) {}
};

App.start();