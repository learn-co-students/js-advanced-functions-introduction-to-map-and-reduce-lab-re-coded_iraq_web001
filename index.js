// Your code here

const Alist=[1,2,5,7,8];
const mapToNegativize=function(Alist){
  const Negative= Alist.map(x => x=-x);
  return Negative;
};

const mapToNoChange= function(Alist){
  const NoChange=Alist.map(x => x=x);
  return NoChange;
};

const mapToDouble= function(Alist){
  const double=Alist.map(x => x=x*2)
  return double;
}

const mapToSquare=function(Alist){
  let squar=Alist.map(x => x= x ** 2);
  return squar
}

const reduceToTotal= function(Alist, val=0){
  
  let total=Alist.reduce((x,val) => x + val,val);
  return total;
}

const reduceToAllTrue= function(Alist){
  
  const allTrue=Alist.reduce((x,startingPoint)=>{
    if(!!x==true && !!startingPoint==true){
       return true
    }else{
      return false
    }
     
  })
  
  
  return allTrue
  
}


const reduceToAnyTrue= function(Alist){
  
  const allTrue=Alist.reduce((x,startingPoint)=>{
    if(!!x==true || !!startingPoint==true){
       return true
    }else{
      return false
    }
     
  })
  
  
  return allTrue
  
}







