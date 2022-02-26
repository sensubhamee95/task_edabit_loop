/* You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments.
 Each date represents a video that was uploaded on that day. Return the number of uploads for a given
  month. */
  let arr = ["dec 21","nov 12","dec 15","oct 7"];
 
      check = function (x,y){
      sum = 0;
      for (var i = 0; i < x.length ; i++){
          if(x[i].startsWith(y)){
              sum = sum + 1;
          };
         
      };
      console.log( sum );
    };
    check(arr,"nov"); 



