// function clickButton() {
//     alert('ボタンが押されました');
// }

function clickButton() {
    let target = document.getElementById('btn01');
    let parent = target.parentNode;
    // spanタグ(id属性の値msg)の要素を取得
    let span = document.getElementById('msg');
    if (span == null) { //　spanタグがなければ、追加する　tagName で指定された HTML 要素を生成
        let newSpan = document.createElement('span');　　
        // spanタグの要素にid属性で値msgを追加　setAttribute(値を設定する属性名を指定する文字列, 属性に割り当てる値を含む文字列)
        newSpan.setAttribute('id', 'msg');
        let newText = document.createTextNode('ボタンが押されました');
        newSpan.append(newText);  //挿入する一連の Node オブジェクトまたは文字列
        parent.insertBefore(newSpan, target.netSibling);    //insertBefore(挿入するノード,現在のノードの次の兄弟ノードを表す Node)            
    }
}