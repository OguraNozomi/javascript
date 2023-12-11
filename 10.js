let apple = {
    name: 'りんご', //名前
    color:'red',    //色
    size:1,         //サイズ
    weight: 10      //重さ
  
};

let orange = {
    name: 'みかん',　　　
    color:'orange',    
    size:2,            
    weight: 20       
  
};

let grape = {
    name: 'ぶどう',
    color:'purple',
    size:3,
    weight: 30
  
};

let fruit = [];  //配列

fruit.push(apple);
fruit.push(orange);
fruit.push(grape);

//console.log(fruit);

let weight = 0;    //総重量

fruit.forEach(function(e){
    weight = weight + e.weight;
});

console.log("総重量：" + weight);