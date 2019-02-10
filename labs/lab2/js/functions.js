            var randomNumber = Math.floor(Math.random() * 99) + 1;
            var guesses = document.querySelector('#guesses');
            var lastResult = document.querySelector('#lastResult');
            var lowOrHi = document.querySelector('#lowOrHi');
            var winLoss = document.querySelector('#winLoss');
            
            var guessSubmit = document.querySelector('.guessSubmit');
            var guessField = document.querySelector('.guessField');
            $(".guessSubmit").css("background-color", "#db8cce");
            
            var guessCount = 1;
            var winCount = 0;
            var lossCount = 0;
            var resetButton = document.querySelector('#reset');    
            $("#reset").css("background-color", "#2ca7e0");
            resetButton.style.display = 'none';                           

            var resetButton;
            guessField.focus();
            
            function checkGuess() {                                         
                var userGuess = Number(guessField.value);
                
                if(isNaN(userGuess)||userGuess>99){
                    lastResult.innerHTML = 'Sorry, that\'s not a valid input!';
                    $("#lastResult").css("background-color", "red");
                    //lastResult.style.backgroundColor = 'red';
                    guessCount--;
                } else {
                if(guessCount === 1) {
                    guesses.innerHTML = 'Previous guesses: ';
                }
                guesses.innerHTML += userGuess + ' ';
                
                if(userGuess === randomNumber) {
                    lastResult.innerHTML = 'Congratulations! You got it right, Champ!';
                    $("#lastResult").css("background-color", "green");
                     //lastResult.style.backgroundColor = 'green';
                    lowOrHi.innerHTML = ' ';
                    winCount++;
                    setGameOver();
                } else if(guessCount === 7) {
                    lastResult.innerHTML = 'Sorry, you lost!';
                    lossCount++;
                    setGameOver();
                } else {
                    lastResult.innerHTML = 'Wrong!';
                    $("#lastResult").css("background-color", "red");
                    //lastResult.style.backgroundColor = 'red';
                    if(userGuess < randomNumber) {
                        lowOrHi.innerHTML = 'Last guess was too low!';
                    } else if(userGuess > randomNumber) {
                        lowOrHi.innerHTML = 'Last guess was too high!';
                    }
                }
                }
                
                guessCount++;
                guessField.value = '';
                guessField.focus();
                winLoss.innerHTML = 'Win/Loss Ratio: ' + winCount + '//' + lossCount;
            }
                $("#guessSubmit").on("click", function() {
                let userGuess = $("#guessField").val();
                });
                guessSubmit.addEventListener('click', checkGuess);
            
                function setGameOver() {
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton.style.display = 'inline';
                resetButton.addEventListener('click', resetGame);
            }
            
            function resetGame() {
                guessCount = 1;
                
                var resetParas = document.querySelectorAll('.resultParas p');
                for(var i = 0; i < resetParas.length; i++) {
                    resetParas[i].textContent = '';
                }
                
                resetButton.style.display = 'none';
                
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();
                
                lastResult.style.backgroundColor = 'white';
                
                randomNumber = Math.floor(Math.random() * 99) + 1;
            }