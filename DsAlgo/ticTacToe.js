// ticTacToe game

/**
 * @param {number[][]} moves
 * @return {string}
 */
function isPresent(twoDarray, array){
    const [x,y,z] = array;
    
    for(let i=0; i<twoDarray.length; i++){
        const [a,b,c] = twoDarray[i];
        if(a===x && b===y && c===z){
            return true;
        }
    }
    
    return false;
}

function isWin(arr){
        const winningSituations = [
            [[0,0],[0,1],[0,2]],
            [[1,0],[1,1],[1,2]],
            [[2,0],[2,1],[2,2]],
            [[0,0],[1,0],[2,0]],
            [[0,1],[1,1],[2,1]],
            [[0,2],[1,2],[2,2]],
            [[0,0],[1,1],[2,2]],
            [[0,2],[1,1],[2,0]],
        ]

        for(let i=0; i<winningSituations.length; i++){
            const [a, b, c] = winningSituations[i];

            
            if(isPresent(arr,a) && isPresent(arr,b) && isPresent(arr,c)){
               return true;  
            }
        }

        return false;
}

var tictactoe = function(moves) {
    
    const A = [];
    const B = [];
    
    moves.map((move, i) => {
        i % 2 === 0? A.push(move) : B.push(move);
    })

    if(isWin(A)){
        return "A";
    }else if(isWin(B)){
        return "B";
    }else if(moves.length === 9){
        return "Draw";
    }else{
        return "Pending";
    }
};

const moves = [[0,0],[2,0],[1,1],[2,1],[2,2]];
const result = tictactoe(moves);
console.log(result);