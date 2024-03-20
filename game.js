let score = JSON.parse(localStorage.getItem('score'));

            if( score === null){
                score = {
                    Wins : 0,
                    Losts : 0,
                    Ties : 0
                }
            }
        
            updateScore();
            
            function function2(computerMove){
                let result = '';

                const randomMove = function1();

                if(computerMove === 'Rock'){
                    if(randomMove === 'Rock'){
                        result = 'Match tie';
                    }
                    if(randomMove === 'Paper'){
                        result = 'You lose';
                    }
                    if(randomMove === 'Scissor'){
                        result = 'You win';
                    }
                }

                if(computerMove === 'Paper'){
                    if(randomMove === 'Rock'){
                        result = 'You win';
                    }
                    if(randomMove === 'Paper'){
                        result = 'Match tie';
                    }
                    if(randomMove === 'Scissor'){
                        result = 'You lose';
                    }
                }

                if(computerMove === 'Scissor'){
                    if(randomMove === 'Rock'){
                        result = 'You lose';
                    }
                    if(randomMove === 'Paper'){
                        result = 'You win';
                    }
                    if(randomMove === 'Scissor'){
                        result = 'Match tie';
                    }
                }

                if(result === 'You win'){
                    score.Wins += 1;
                }
                if(result === 'You lose'){
                    score.Losts += 1;
                }
                if(result === 'Match tie'){
                    score.Ties += 1;
                }

                localStorage.setItem('score',JSON.stringify(score));

                document.querySelector('.update-result').innerHTML = result;

                document.querySelector('.update-result-information').innerHTML = `You <img src="${computerMove}-emoji.png" class="icon-img"> <img src="${randomMove}-emoji.png" class="icon-img"> Computer`;

                updateScore();
            }

            function updateScore(){
                document.querySelector('.update-score').innerHTML = `Wins : ${score.Wins}, Losts : ${score.Losts}, Ties : ${score.Ties}`;
            }

            function function1(){
                const randomNumber = Math.random();
                if(randomNumber >= 0 && randomNumber < 1/3){
                    randomMove = 'Rock';
                }
                else if(randomNumber >= 1/3 && randomNumber < 2/3){
                    randomMove = 'Paper';
                }
                else if(randomNumber >= 2/3 && randomNumber < 1){
                    randomMove = 'Scissor';
                }
                return randomMove;
            }