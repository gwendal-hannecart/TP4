function sum1(numbers){
   
    let result=0;
    for(let i=0;i<numbers.length;i++){
        result=numbers[i]+result;
    }
    return result;
}

function sum2(numbers){
    let result=0;
    for(number of numbers){
         result+=number;
    }
    return result;
}

function longestWord(words){
    let result=words[0];
    for(let i=0;i<words.length;i++){
        if(words[i].length >=result.length){
            result=words[i];
        }
    }
    return result;
}

function range(min, max, step){
    var result=[min];
    let j=1;
   for(i=min;i<max;i=i+step){
        result[j]=step+i;
        j++;
       }
    
    return result;
}

function nbOccurences(wordList, word){
    let tableau=wordList.split(" ");
    let result=0;
    for(let i=0;i<tableau.length;i++){
        if(tableau[i]===word){
            result=result+1;
        }
       }
    
    return result;
}
