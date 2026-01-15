const game = document.getElementById("game");
const buttons = game.querySelector("#buttons")

const buttonGrid = [
    [
        buttons.querySelector("#button00"),
        buttons.querySelector("#button01"), 
        buttons.querySelector("#button02")
    ],
    [
        buttons.querySelector("#button10"),
        buttons.querySelector("#button11"), 
        buttons.querySelector("#button12")
    ],
    [
        buttons.querySelector("#button20"),
        buttons.querySelector("#button21"), 
        buttons.querySelector("#button22")
    ]
]
let jogador = 1; // x
const buttonStates = 
[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

document.getElementById("reset").addEventListener("click", (e) => {
    resetButtons();
})
buttonGrid[0][0].addEventListener('click', (e) => {
    const retorno = value(jogador,0,0);
    buttonGrid[0][0].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
     if(findWinner() == 2)
    {
        ballWin()
    }
});
buttonGrid[0][1].addEventListener('click', (e) => {
    const retorno = value(jogador,0,1);
    buttonGrid[0][1].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
     if(findWinner() == 2)
    {
        ballWin()
    }
});
buttonGrid[0][2].addEventListener('click', (e) => {
    const retorno = value(jogador,0,2);
    buttonGrid[0][2].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
     if(findWinner() == 2)
    {
        ballWin()
    }
});

buttonGrid[1][0].addEventListener('click', (e) => {
    const retorno = value(jogador,1,0);
    buttonGrid[1][0].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
     if(findWinner() == 2)
    {
        ballWin()
    }
});
buttonGrid[1][1].addEventListener('click', (e) => {
    const retorno = value(jogador,1,1);
    buttonGrid[1][1].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
     if(findWinner() == 2)
    {
        ballWin()
    }
});
buttonGrid[1][2].addEventListener('click', (e) => {
    const retorno = value(jogador,1,2);
    buttonGrid[1][2].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
     if(findWinner() == 2)
    {
        ballWin()
    }
});

buttonGrid[2][0].addEventListener('click', (e) => {
    const retorno = value(jogador,2,0);
    buttonGrid[2][0].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
    if(findWinner() == 2)
    {
        ballWin()
    }
});
buttonGrid[2][1].addEventListener('click', (e) => {
    const retorno = value(jogador,2,1);
    buttonGrid[2][1].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
     if(findWinner() == 2)
    {
        ballWin()
    }
});
buttonGrid[2][2].addEventListener('click', (e) => {
    const retorno = value(jogador,2,2);
    buttonGrid[2][2].innerHTML = retorno.button;
    jogador = retorno.player;
    if(findWinner() == 1)
    {
        xWin();
    }
    if(findWinner() == 2)
    {
        ballWin()
    }
});


//================================


function ballWin()
{
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            buttonGrid[i][j].innerHTML = "o";
            buttonStates[i][j] = 2;
        }
    }
}
function xWin()
{
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            buttonGrid[i][j].innerHTML = "x";
            buttonStates[i][j] = 1;
        }
    }
}
function value(jogador,x,y)
{
    if(jogador === 1 && buttonStates[x][y] === 0)
    {
        buttonStates[x][y] = 1;
        return {
            button:"x",
            player:2
        };
    }
    if(jogador === 2 && buttonStates[x][y] === 0)
    {
        buttonStates[x][y] = 2;
        return {
            button:"o",
            player:1
        };;
    }    
    return {
        button: buttonStates[x][y] === 2 ? "o" : "x",
        player:jogador
    }
}
function resetButtons()
{
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            buttonGrid[i][j].innerHTML = " ";
            buttonStates[i][j] = 0;
            jogador = 1;
        }
    }
}
function findWinner()
{
    function ballWinner()
    {
        if(buttonStates[0][0] === buttonStates[1][0] && 
          buttonStates[0][0] === buttonStates[2][0] &&
          buttonStates[0][0] === 2 
         )
         {
            return true;
         }
        if(buttonStates[0][1] === buttonStates[1][1] && 
          buttonStates[0][1] === buttonStates[2][1] &&
          buttonStates[0][1] === 2 
         )
         {
            return true;
         }
         if(buttonStates[0][2] === buttonStates[1][2] && 
          buttonStates[0][2] === buttonStates[2][2] &&
          buttonStates[0][2] === 2 
         )
         {
            return true;
         }
        if(buttonStates[0][0] === buttonStates[0][1] && 
          buttonStates[0][0] === buttonStates[0][2] &&
          buttonStates[0][0] === 2 
         )
         {
            return true;
         }
         if(buttonStates[1][0] === buttonStates[1][1] && 
          buttonStates[1][0] === buttonStates[1][2] &&
          buttonStates[1][0] === 2 
         )
         {
            return true;
         }
         if(buttonStates[2][0] === buttonStates[2][1] && 
          buttonStates[2][0] === buttonStates[2][2] &&
          buttonStates[2][0] === 2 
         )
         {
            return true;
         }
         if(buttonStates[0][0] === buttonStates[1][1] && 
            buttonStates[0][0] === buttonStates[2][2] &&
            buttonStates[0][0] === 2
        )
         {
            return true;
         }
        if(buttonStates[0][2] === buttonStates[1][1] && 
            buttonStates[0][2] === buttonStates[2][0] &&
            buttonStates[0][2] === 2
        )
         {
            return true;
         }
         return false;
    }
    function xWinner()
    {
        if(buttonStates[0][0] === buttonStates[1][0] && 
          buttonStates[0][0] === buttonStates[2][0] &&
          buttonStates[0][0] === 1 
         )
         {
            return true;
         }
        if(buttonStates[0][1] === buttonStates[1][1] && 
          buttonStates[0][1] === buttonStates[2][1] &&
          buttonStates[0][1] === 1 
         )
         {
            return true;
         }
         if(buttonStates[0][2] === buttonStates[1][2] && 
          buttonStates[0][2] === buttonStates[2][2] &&
          buttonStates[0][2] === 1 
         )
         {
            return true;
         }



        if(buttonStates[0][0] === buttonStates[0][1] && 
          buttonStates[0][0] === buttonStates[0][2] &&
          buttonStates[0][0] === 1 
         )
         {
            return true;
         }
         if(buttonStates[1][0] === buttonStates[1][1] && 
          buttonStates[1][0] === buttonStates[1][2] &&
          buttonStates[1][0] === 1 
         )
         {
            return true;
         }
         if(buttonStates[2][0] === buttonStates[2][1] && 
          buttonStates[2][0] === buttonStates[2][2] &&
          buttonStates[2][0] === 1 
         )
         {
            return true;
         }
         if(buttonStates[0][0] === buttonStates[1][1] && 
            buttonStates[0][0] === buttonStates[2][2] &&
            buttonStates[0][0] === 1
        )
         {
            return true;
         }
        if(buttonStates[0][2] === buttonStates[1][1] && 
            buttonStates[0][2] === buttonStates[2][0] &&
            buttonStates[0][2] === 1
        )
         {
            return true;
         }
         return false;
    }

    if(ballWinner())
    {
        return 2;
    }
    if(xWinner()){
        return 1;
    }
    return 0;
}