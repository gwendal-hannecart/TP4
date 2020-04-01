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


function flatten2D(array){
    var result=[0];
    let k=0;
    for(let nb of array){
        for(let n of nb){
            result.push(n);
        }
    }
    return result;
}

function exercice6(array){
    console.log(array);
    array.pop();
    array.push("bonjour");
    return array;
}

function exercice7(){
    let i=0;
    while(i<9){
        for(let h=0;h<11;h++){
             for(let j=0;j<11;j++){
                    let k=j*h
                    console.log(j, "*",i,"=", k);
             }
        i++
         }
    }
}

function encrypte8(s, n){
    var tab=["A", "B", "C", "D", "E" ,"F" ,"G" ,"H", "I", "J", "K", "L", "M", "N", "O" ,"P" ,"Q" ,"R", "S" ,"T", "U", "V" ,"W", "X" ,"Y", "Z"]
    var tabmin=["a", "b", "c", "d", "e" ,"f" ,"g" ,"h", "i", "j", "k", "l", "m", "n", "o" ,"p" ,"q" ,"r", "s" ,"t", "u", "v" ,"w", "x" ,"y", "z"]
    var result=[0];
    var tab2=[0];
    let j=0;
    for(let i=0;i <s.length;i++){
        tab2[i]=s[i];;
    }
    for(i=0;i<s.length;i++){
       if(tab2[i]>="A" && tab2[i]<="Z"){ 
            if(tab2[i]===" "){
                result[i]=" ";
            }
            else{
                    while(tab2[i] !=tab[j]){
                     j++
                    }
                     if(j+n <=25){
                        result[i]=tab[j+n];
                     }
                    else{
                    let k=Math.trunc((n+i)/26)+1;
                    result[i]=tab[k];
            }
         }
    }
    else{
        if(tab2[i]===" "){
            result[i]=" ";
        }
        else{
            while(tab2[i] !=tabmin[j]){
            j++
             }
             if(j+n <=25){
                    result[i]=tab[j+n];
            }
            else{
                let k=Math.trunc((n+i)/26)+1;
                 result[i]=tab[k];
            }
        }
    }
    j=0;
    }
    let result2=result.join("");
    return result2;

}

function decrypte8(s, n){
    
        var tab=["A", "B", "C", "D", "E" ,"F" ,"G" ,"H", "I", "J", "K", "L", "M", "N", "O" ,"P" ,"Q" ,"R", "S" ,"T", "U", "V" ,"W", "X" ,"Y", "Z"]
        var tabmin=["a", "b", "c", "d", "e" ,"f" ,"g" ,"h", "i", "j", "k", "l", "m", "n", "o" ,"p" ,"q" ,"r", "s" ,"t", "u", "v" ,"w", "x" ,"y", "z"]
        var result=[0];
        var tab2=[0];
        let j=0;
        for(let i=0;i <s.length;i++){
            tab2[i]=s[i];;
        }
       for(i=0;i<s.length;i++){          
        if(tab2[i]>="A" && tab2[i]<="Z"){ 
            if(tab2[i]===" "){
                result[i]=" ";
            }
            else{
                while(tab2[i] !=tab[j]){
                j++
                }
                if(j-n >=0){
                    result[i]=tab[j-n];
                }
                else{
                    let k=26-j;
                    result[i]=tab[k];
           }
        }
    }
    else{
        if(tab2[i]===" "){
            result[i]=" ";
        }
        else{
            while(tab2[i] !=tabmin[j]){
                j++
            }
            if(j-n >=0){
                result[i]=tabmin[j-n];
            }
            else{
                let k=26-j;
                result[i]=tabmin[k];
            }
        }
    }
    j=0;
 }
        let result2=result.join("");
        return result2;
    
    
}

function encrypte9(s, n){
    var tab=["A", "B", "C", "D", "E" ,"F" ,"G" ,"H", "I", "J", "K", "L", "M", "N", "O" ,"P" ,"Q" ,"R", "S" ,"T", "U", "V" ,"W", "X" ,"Y", "Z"]
    var tabmin=["a", "b", "c", "d", "e" ,"f" ,"g" ,"h", "i", "j", "k", "l", "m", "n", "o" ,"p" ,"q" ,"r", "s" ,"t", "u", "v" ,"w", "x" ,"y", "z"]
    var result=[0];
    var tab2=[0];
    let j=0;
    let n1=""+n;
    let clef=n1.split("");
    let tour=0;
    let k;
    for(let i=0;i <s.length;i++){
        tab2[i]=s[i];;
    }
    for(i=0;i<s.length;i++){          
        if(tab2[i]>="A" && tab2[i]<="Z"){
        if(tour===2){
            k=parseInt(n1[tour]);
         if(tab2[i]===" "){
                result[i]=" ";
        }
        else{
            while(tab2[i] !=tab[j]){
                j++
               }
                if(j+k <=25){
                   result[i]=tab[j+k];
                }
               else{
               let h=Math.trunc((k+i)/26)+1;
               result[i]=tab[h];
                 }
                 tour=0;
            }   
        } 
            if(tour===1){
           
             if(tab2[i]===" "){
                    result[i]=" ";
            }
            else{
                      k=parseInt(n1[tour]);
                    while(tab2[i] !=tab[j]){
                        j++
                       }
                        if(j+k <=25){
                           result[i]=tab[j+k];
                        }
                       else{
                       let h=Math.trunc((k+i)/26)+1;
                       result[i]=tab[h];
                         }
             tour++;
        }
    }
            if(tour===0){
                k=parseInt(n1[tour]);
                 if(tab2[i]===" "){
                        result[i]=" ";
                }
                else{
                    while(tab2[i] !=tab[j]){
                        j++
                       }
                        if(j+k <=25){
                           result[i]=tab[j+k];
                        }
                       else{
                       let h=Math.trunc((k+i)/26)+1;
                       result[i]=tab[h];
                         }
                 }
                 tour=tour++;
            }
        
         }
    else{

        if(tab2[i]===" "){
            result[i]=" ";
        }
        else{ 
            if(tour===2){
                k=parseInt(n1[tour]);
                while(tab2[i] !=tabmin[j]){
                    j++
                   }
                    if(j+k <=25){
                       result[i]=tabmin,[j+k];
                    }
                   else{
                   let h=Math.trunc((k+i)/26)+1;
                   result[i]=tabmin[h];
                     }
               tour=0;
             }
            if(tour===1){
                k=parseInt(n1[tour]);
                while(tab2[i] !=tabmin[j]){
                    j++
                   }
                    if(j+k <=25){
                       result[i]=tabmin[j+k];
                    }
                   else{
                   let h=Math.trunc((k+i)/26)+1;
                   result[i]=tabmin[h];
                     }
                   tour=tour++;
               }
            if(tour===0){
                k=parseInt(n1[tour]);
                while(tab2[i] !=tabmin[j]){
                    j++
                   }
                    if(j+k <=25){
                       result[i]=tabmin[j+k];
                    }
                   else{
                   let h=Math.trunc((k+i)/26)+1;
                   result[i]=tabmin[h];
                     }
                tour++;
            }
            
              
            }    
        }
    j=0;
    }
     let result2=result.join("");
        return result2;   
 }
       
    
    




function decrypte9(s, n){
    var tab=["A", "B", "C", "D", "E" ,"F" ,"G" ,"H", "I", "J", "K", "L", "M", "N", "O" ,"P" ,"Q" ,"R", "S" ,"T", "U", "V" ,"W", "X" ,"Y", "Z"]
    var tabmin=["a", "b", "c", "d", "e" ,"f" ,"g" ,"h", "i", "j", "k", "l", "m", "n", "o" ,"p" ,"q" ,"r", "s" ,"t", "u", "v" ,"w", "x" ,"y", "z"]
    var result=[0];
    var tab2=[0];
    let j=0;
    let n1=""+n;
    let clef=n1.split("");
    let tour=0;
    let k;
    for(let i=0;i <s.length;i++){
        tab2[i]=s[i];;
    }
    for(i=0;i<s.length;i++){          
        if(tab2[i]>="A" && tab2[i]<="Z"){
        if(tour===2){
            k=parseInt(n1[tour]);
         if(tab2[i]===" "){
                result[i]=" ";
        }
        else{
            while(tab2[i] !=tab[j]){
                j++
               }
                if(j+k <=25){
                   result[i]=tab[j+k];
                }
               else{
               let h=Math.trunc((k+i)/26)+1;
               result[i]=tab[h];
                 }
                 tour=0;
            }   
        } 
            if(tour===1){
           
             if(tab2[i]===" "){
                    result[i]=" ";
            }
            else{
                      k=parseInt(n1[tour]);
                    while(tab2[i] !=tab[j]){
                        j++
                       }
                        if(j+k <=25){
                           result[i]=tab[j+k];
                        }
                       else{
                       let h=Math.trunc((k+i)/26)+1;
                       result[i]=tab[h];
                         }
             tour++;
        }
    }
            if(tour===0){
                k=parseInt(n1[tour]);
                 if(tab2[i]===" "){
                        result[i]=" ";
                }
                else{
                    while(tab2[i] !=tab[j]){
                        j++
                       }
                        if(j+k <=25){
                           result[i]=tab[j+k];
                        }
                       else{
                       let h=Math.trunc((k+i)/26)+1;
                       result[i]=tab[h];
                         }
                 }
                 tour=tour++;
            }
        
         }
    else{

        if(tab2[i]===" "){
            result[i]=" ";
        }
        else{ 
            if(tour===2){
                k=parseInt(n1[tour]);
                while(tab2[i] !=tabmin[j]){
                    j++
                   }
                    if(j+k <=25){
                       result[i]=tabmin,[j+k];
                    }
                   else{
                   let h=Math.trunc((k+i)/26)+1;
                   result[i]=tabmin[h];
                     }
               tour=0;
             }
            if(tour===1){
                k=parseInt(n1[tour]);
                while(tab2[i] !=tabmin[j]){
                    j++
                   }
                    if(j+k <=25){
                       result[i]=tabmin[j+k];
                    }
                   else{
                   let h=Math.trunc((k+i)/26)+1;
                   result[i]=tabmin[h];
                     }
                   tour=tour++;
               }
            if(tour===0){
                k=parseInt(n1[tour]);
                while(tab2[i] !=tabmin[j]){
                    j++
                   }
                    if(j+k <=25){
                       result[i]=tabmin[j+k];
                    }
                   else{
                   let h=Math.trunc((k+i)/26)+1;
                   result[i]=tabmin[h];
                     }
                tour++;
            }
            
              
            }    
        }
    j=0;
    }
     let result2=result.join("");
        return result2;   
 }
   
    
    
