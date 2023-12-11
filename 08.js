//関数名がある場合

function triangle(bottom,height){
    
    let area = bottom*height/2;
    
    return area;
}

console.log(triangle(10,20));


//関数名がない場合

let triangle_2 = function(bottom,height){
    
    let area = bottom*height/2;
    
    return area;
}

console.log(triangle_2(20,40));