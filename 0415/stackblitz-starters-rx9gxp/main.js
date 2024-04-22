import { Chiikawa } from "./class.js";

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