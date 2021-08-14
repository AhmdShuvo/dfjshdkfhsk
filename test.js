//Problem-3

//function declaration
function deliveryCost(totalProducts){
    //if else starts

    if(typeof totalProducts !='number'||totalProducts<0||totalProducts%1 != 0){                                                  
        return ' Error! Invalid Input Type Please Enter a Number ! ';
        }
        // If argument is validate then calculating the answer
    else if (totalProducts <= 100)
    {
        ans = totalProducts * 100;
    }
   else if (totalProducts > 100 && totalProducts<=200) {
        ans = ((totalProducts - 100) * 80) + (100 * 100);
    }
    else {
        ans = ((totalProducts - 200) * 50) + (100 * 100)+(80*100);
    }
    return ans;

}

let totalCost=deliveryCost(205 );
console.log(totalCost);
