let score= JSON.parse(localStorage.getItem('score'));
            if(score===null){
                score={
                    Win:0,
                    Loss:0,
                    Tie:0
                };
            }

            updateScoreElem();

            function pick_computer_move(){
                const randomNumber=Math.random();
                let computerMove='';
                if(randomNumber>=0 && randomNumber<1/3){
                    computerMove='Rock';
                }
                else if(randomNumber>=1/3 && randomNumber<2/3){
                    computerMove='Paper';
                }
                else if(randomNumber>=2/3 && randomNumber<1){
                    computerMove='Scissors';
                }
                return computerMove;
            }

            function gameplay(playerMove){
                const computerMove= pick_computer_move();

                let result='';
                if(playerMove==='Scissors'){
                    if(computerMove==='Rock'){
                        result='You Lose';
                    }
                    else if(computerMove==='Paper'){
                        result='You Win';
                    }
                    else{
                        result='Tie';
                    }
                }

                else if(playerMove==='Paper'){
                    if(computerMove==='Rock'){
                        result='You Win';
                    }
                    else if(computerMove==='Paper'){
                        result='Tie';
                    }
                    else{
                        result='You Lose';
                    }
                }

                else if(playerMove==='Rock'){
                    if(computerMove==='Rock'){
                        result='Tie';
                    }
                    else if(computerMove==='Paper'){
                        result='You Lose';
                    }
                    else{
                        result='You Win';
                    }
                }
                if(result==='You Win'){
                    score.Win++;
                }
                else if(result==='You Lose'){
                    score.Loss++;
                }
                else{
                    score.Tie++;
                }
                localStorage.setItem('score',JSON.stringify(score));
                updateScoreElem();
                document.querySelector('.js-result').innerHTML=result;

                document.querySelector('.js-moves').innerHTML=`  You <img src="${playerMove}-emoji.png" class="move-icon"> 
                    <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
            }

            function updateScoreElem(){
                document.querySelector('.js-score').innerHTML=`Wins: ${score.Win}, Losses: ${score.Loss}, Ties: ${score.Tie}`;
            }
