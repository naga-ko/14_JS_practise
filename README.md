# 14_JS_practise
 2024前期JacaScript演習リポジトリ

## オブジェクトとクラス

- ４月１５日（月）
### オブジェクト

```
オブジェクトの定義
const parson = {
    // プロパティ
    name: "", //""は空文字といってデータが何もない文字列を意味しています。
    age: 0, // メソッド
    information: function () {
        return "名前：" + this.name + "\n年齢：" + this.age;
    },
};

// プロパティの値を代入
parson.name = "山田太郎";
parson.age = 18;

// 情報の開示
const info = parson.information();
console.log(info);


//もっと簡単なオブジェクト
const dict = { apple: "りんご", banana: "バナナ", orange: "オレンジ" };

console.log(dict.apple);
console.log(dict["apple"]);//ブランケット記法の場合は、文字列で。

dict.apple = "林檎";
console.log(dict);

//ぶどうを加える
dict.grape = "ぶどう";//grapeはないから追加される
console.log(dict);

delete dict.orange;
console.log(dict);
```

### boxとオブジェクト指向
```
 class Chiikawa {
    constructor(story, title, image, id) {
    this.story = story;
    this.title = title;
    this.image = image;
    this.id = id;
    }
    //メソッド
    createMarkup() {
    return `
        <dl>
        <dt><span>第${this.story}話</span>${this.title}</dt>
        <dd>
            <a href="https://www.youtube.com/watch?v=${this.id}">
            <img src="images/${this.image}" alt="${this.title}" />
            </a>
        </dd>
        </dl>`;
    }
}
//複数なので配列を準備
const chiikawaContents = [];

const container = document.querySelector(".contents");
//インスタンス化
//配列の順番を表す数字を「添字」また「index」という
for (let i = 0; i < chiikawas.length; i++) {
    chiikawaContents.push(new Chiikawa(chiikawas[i].story, chiikawas[i].title, chiikawas[i].image, chiikawas[i].id));
    // console.log(chiikawaContents[i].createMarkup());
    container.insertAdjacentHTML("beforeend", chiikawaContents[i].createMarkup());
}

console.log(chiikawaContents);

//forEachを使ったバージョン
/*chiikawas.forEach((chiikawa) => {
    chiikawaContents.push(new Chiikawa(chiikawa.story, chiikawa.title, chiikawa.image, chiikawa.id));
    container.insertAdjacentHTML("beforeend", chiikawaContents[chiikawaContents.length - 1].createMarkup());
});*/
```

### 静的メソッドと静的プロパティ
```
class InstantNoodle {
    //静的プロパティ
    static TYPE = "インスタントラーメン";

    //静的メソッド
    static making() {
        return `<p>${InstantNoodle.TYPE}は、鍋で作ります。</p>`;
    }
}

document.body.insertAdjacentHTML("beforeend", InstantNoodle.making());
console.log(InstantNoodle.TYPE);
```