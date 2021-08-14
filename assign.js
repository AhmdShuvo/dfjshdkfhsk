


// PROBLEM -1//


function seerToMon(seer){   //declearing Function//

            //   Error Messages goes here //
    if(typeof seer !='number'){                                                  
        return ' Error! Invalid Input Type Please Enter a Number ! ';
    }
    else if(seer<1 ){
        return ' Error ! Invalid Input Type , Please Enter a Number greater Then 1 '
    }
    //    MAIN mathematical part
    const mon =seer/40;
    return mon;

   }
        //  declearing a value in the function/
   let valueInMon=seerToMon(120);
   console.log(valueInMon);

//    End Of problem-1


                    // PROBLEM-2

    function totalSales( shirtQuantity,pantQuantity,shoeQuantity){  //declearing function with 3 parameters//


            //  Error Messages here //

        if(typeof shirtQuantity!='number'){
            return 'Shirt Quantity needs to be A positive number'
        }
        if(typeof pantQuantity!='number'){
            return 'pant Quantity needs to be A positive number'
        }
        if(typeof shoeQuantity!='number'){
            return 'Shoe Quantity needs to be An number grater than -1'
        }

        if( shirtQuantity <0){
           return 'Quantity needs to be An number grater than -1'
        }
        if(pantQuantity <=-1){
            return 'Quantity needs to be An number grater than -1'
        }
        if( shoeQuantity <=-1){
              return 'Quantity needs to be An number grater than -1'
        }

        //  mathematical Expressions//

    let totalShirtPrice=shirtQuantity*100;
        
    let totalPantPrice=pantQuantity*200;
    let totalShoePrice=shoeQuantity*500;

    let totalPrice=totalPantPrice+totalShirtPrice+totalShoePrice;

    // returning total price //
 return totalPrice;


    }
    //  realtime output With console.log //
    var totalsaled=totalSales(1,1,1);
    console.log(totalsaled);

    // END OF PROBLEM -2// 

    // PROBLEM-3// 

     function deliveryCost(Quantity) //declearing function//
    {


        // Error Message here  //

        if(typeof Quantity!='number'){

            return 'Error! Invalid Input Type '
        }
        if(Quantity<1){

            return 'Error! Invalid Input Type '
        }
            //  declearing variabes needed//
        let chargeFor100=100;
        let chargeFor200=80;
        let chargeForMore200=50;

        // charge for quantity 100//
        
 if(Quantity<=100){
     let charge100 = Quantity*chargeFor100;
         return charge100;
 }
//  charge for Quantity more than 100 and less than 200///
 else if(Quantity>100 && Quantity<200){
        const first100charge=100*chargeFor100;
        const rest=Quantity-100;
        const restcharge=rest*chargeFor200;

        const totalDelevaryFor200=first100charge+restcharge;
        return totalDelevaryFor200;
   
 }

//  charge for Quantity more than 200 ///
 else if (Quantity>200){

     const first100charge=100*chargeFor100;
     
     const second100charge=100*chargeFor200;
   
     const rest=Quantity-200;
     
     const restcharge=rest*chargeForMore200;
     const totalCharge=first100charge+second100charge+restcharge;

     return totalCharge;
 }
 

}
    //   live output with parameters// 
    let totalcharge=deliveryCost(205);
    console.log(totalcharge);

    // END PROBLEM-3// 



    // PROBLEM-4

    //   declearing function //
function  perfectFriend(array){

    // Error message HEre //
     if(typeof array !="object"){

        return 'Please Enter An Array '
     }
    var friend= 0;

    //  starts the loop //
    for (i=0; i<array.length; i++){
        if (array[i].length ==5){
          friend= array[i];
        }
  
    } 
    // returns first friend  with  5 latters//

    return friend;
  }
        //    live output with parameters //
        var arr = perfectFriend( [ 'fdgdfgdfg', 'ths','arg', 'gdfgf', 'gdfgdfhawsdgd', 'gdf', 'gdfhdfhjurvweadsd' ]);
        console.log(arr);

        // end of problem 4//