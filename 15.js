// 商品クラスの生成
class Item {
    // コンストラクタ
    constructor(id, name, stock) {
        //　引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }

    // メソッド
    // Idの値を返す
    getId() {
        return this.id;
    }

    // nameの値を返す
    getName() {
        return this.name;
    }

    // stockの値を返す
    getStock() {
        return this.stock;
    }

    // 商品の追加
    addStock(num) {
        this.stock += num;
    }

    // 商品の販売
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

// class Bed extends Item {
//     constructor(id, name, stock, size) {
//         //　引数の値を使ってプロパティの初期化を行う
//         super(id, name, stock);
//         this.size = size;           //　ベッドのサイズ
//     }

//     getSize() {
//         return this.size;
//     }
// }

class Chair extends Item {
    constructor(id, name, stock, condition) {
        //　引数の値を使ってプロパティの初期化を行う
        super(id, name, stock);
        this.condition = condition;           //　商品の状態
    }

    getCondition() {
        return this.condition;
    }
}

// インスタンスの生成
let chair1 = new Chair('0001', 'ソファ', 100, '新品');
let chair2 = new Chair('0002', 'シングルソファ', 100, '中古');
let chair3 = new Chair('0003', '子ども用ソファ', 10, '新品');
let chair4 = new Chair('0004', 'リビング用ソファ', 10, '中古');
//let item4 = new Item('0004', '鍋', 100);

let itemList = [chair1,chair2,chair3,chair4]

itemList.forEach((e) => {
    console.log(e);
})



//　全体の在庫数を確認
let totalStock = 0;
for (let i = 0; i < itemList.length; i++) {
    totalStock += itemList[i].getStock();
    
    if(itemList[i].getCondition()==='中古'){
        console.log('中古:' + itemList[i].getName());
    }
    
}
console.log('全体の在庫数:' + totalStock);