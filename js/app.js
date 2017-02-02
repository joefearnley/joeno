'use strict';


const App = {
    gameNumber: 0,
    draws: [],
    start: function() {

        this.createGame();

        // now wait 3 minutes
        // should display a countdown in the UI
        setInterval(this.createGame.bind(this), 180000);
    },
    createGame: function() {
        this.gameNumber++;
        
        let boardHtml = Mustache.render($('#gameTemplate').html(), { 
            gameNumber: this.gameNumber
        });

        $('#content').hide().html(boardHtml).fadeToggle();
        //$('#content').fadeIn(1000);
        
        let numbers = this.drawNumbers();
        let currentNumber = 1;
        let self = this;

        // display a number every 5 seconds.
        var interval = setInterval(function() {
            // grab next number in the draw and update the board
            self.updateNumber(numbers[currentNumber]);

            // clear the interval after 20 draws
            if (currentNumber == 20) {
                clearInterval(interval);
                self.showResults(numbers);
                return;
            }
            
            currentNumber++;
            
        }, 1000);
        
        return;
    },
    drawNumbers: function() {
        let numbers = [];
        while(numbers.length < 20) {
            let number = Math.floor(Math.random() * 81);
            if(!numbers.includes(number)) {
                numbers.push(number);
            }
        }

        return numbers;
    },
    updateNumber: function(number) {
        $('#number' + number).pulsate({
            repeat: false
        }).css('background-color', '#ddd');
            
    },
    showResults: function(numbers) {
        // build results template
        let html = Mustache.render($('#resultsTemplate').html(), {
            gameNumber: this.gameNumber,
            numbers1: numbers[0],
            numbers2: numbers[1],
            numbers3: numbers[2],
            numbers4: numbers[3],
            numbers5: numbers[4],
            numbers6: numbers[5],
            numbers7: numbers[6],
            numbers8: numbers[7],
            numbers9: numbers[8],
            numbers10: numbers[9],
            numbers11: numbers[10],
            numbers12: numbers[11],
            numbers13: numbers[12],
            numbers14: numbers[13],
            numbers15: numbers[14],
            numbers16: numbers[15],
            numbers17: numbers[16],
            numbers18: numbers[17],
            numbers19: numbers[18],
            numbers20: numbers[19]
        });

        // // fade results in.
        $('#content').hide().html(html).show();
    }
};

$(function() {
    App.start();
});