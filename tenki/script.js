const Btn = document.querySelector(".weather_Btn");
const j = 0;
Btn.addEventListener("click", function () {

    const select = document.getElementById("weather_code");
    const selectedIndex = select.selectedIndex; //1,2,3...

    if (selectedIndex === 0) {
        console.log("都道府県が選択されていません。");
        alert('都道府県が選択されていません。');
        return;
    }

    const selectedOption = select.options[selectedIndex]; //<option value="110000">北海道</option>
    const selectedPrefecture = selectedOption.text; //北海道
    const selectedCode = selectedOption.value; //110000

    console.log(`選択された都道府県: ${selectedPrefecture}`);
    console.log(`選択された都道府県のコード: ${selectedCode}`);

    const select2 = document.getElementById("weather_code2");
    const selectedIndex2 = select2.selectedIndex;

    if (selectedIndex2 === 0) {
        console.log("都道府県が選択されていません。");
        alert('もう一つの都道府県を選択してください。');
        return;
    }

    const selectedOption2 = select2.options[selectedIndex2];
    const selectedPrefecture2 = selectedOption2.text;
    const selectedCode2 = selectedOption2.value;

    console.log(`選択された都道府県: ${selectedPrefecture2}`);
    console.log(`選択された都道府県のコード: ${selectedCode2}`);

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${selectedCode}.json`;
    const url2 = `https://www.jma.go.jp/bosai/forecast/data/forecast/${selectedCode2}.json`;

    const card__back = document.querySelector(".card__back");
    card__back.style.opacity = "0";

    const card__back2 = document.querySelector(".card__back2");
    card__back2.style.opacity = "0";

    fetch(url)
        .then(function (response) {
            response.json().then(function (data) {
                const code = data[0].timeSeries[0].areas[0].weatherCodes[0];
                const Card__suu = document.querySelector(".card__suu");
                const text = document.querySelector(".card__text");
                const Card__suu__ja = document.querySelector(".card__suu__ja");
                text.innerHTML = weathercode[code][4].length;
                Card__suu__ja.innerHTML = weathercode[code][3];
                Card__suu.innerHTML = weathercode[code][4];

                const card__tenki = document.querySelector(".card__tenki");
                card__tenki.innerHTML = ''; // Clear previous images
                const image = document.createElement("img");
                image.src = `https://www.jma.go.jp/bosai/forecast/img/${weathercode[code][0]}`;
                card__tenki.appendChild(image);

                const card__tenki__bottom = document.querySelector(".card__tenki__bottom");
                card__tenki__bottom.innerHTML = ''; // Clear previous images
                const image__bottom = document.createElement("img");
                image__bottom.src = `https://www.jma.go.jp/bosai/forecast/img/${weathercode[code][0]}`;
                card__tenki__bottom.appendChild(image__bottom);

                fetch(url2)
                    .then(function (response) {
                        response.json().then(function (data2) {
                            const code2 = data2[0].timeSeries[0].areas[0].weatherCodes[0];
                            if (weathercode[code][4].length > weathercode[code2][4].length) {
                                const win__or__lose = document.querySelector(".win__or__lose");
                                const win__or__lose2 = document.querySelector(".win__or__lose2");
                                win__or__lose.innerHTML = "WIN";
                                win__or__lose.style.color = "#ff0000";
                                win__or__lose2.innerHTML = "LOSE";
                                win__or__lose2.style.color = "#0000ff";
                            } else if (weathercode[code][4].length < weathercode[code2][4].length) {
                                const win__or__lose = document.querySelector(".win__or__lose");
                                const win__or__lose2 = document.querySelector(".win__or__lose2");
                                win__or__lose.innerHTML = "LOSE";
                                win__or__lose.style.color = "#0000ff";
                                win__or__lose2.innerHTML = "WIN";
                                win__or__lose2.style.color = "#ff0000";
                            } else if (weathercode[code][4].length === weathercode[code2][4].length) {
                                const win__or__lose = document.querySelector(".win__or__lose");
                                const win__or__lose2 = document.querySelector(".win__or__lose2");
                                win__or__lose.innerHTML = "DRAW";
                                win__or__lose.style.color = "#5c5c5c";
                                win__or__lose2.innerHTML = "DRAW";
                                win__or__lose2.style.color = "#5c5c5c";
                            }
                        });
                    })
                    .catch(function (err) {
                        console.log("Fetchエラー:", err);
                    });
            });
        })
        .catch(function (err) {
            console.log("Fetchエラー:", err);
        });

    /////////////////////////////////////////////////////////////////

    fetch(url2)
        .then(function (response) {
            response.json().then(function (data2) {
                const code2 = data2[0].timeSeries[0].areas[0].weatherCodes[0];
                const Card__suu2 = document.querySelector(".card__suu2");
                const text2 = document.querySelector(".card__text2");
                const Card__suu2__ja = document.querySelector(".card__suu2__ja");
                text2.innerHTML = weathercode[code2][4].length;
                Card__suu2__ja.innerHTML = weathercode[code2][3];
                Card__suu2.innerHTML = weathercode[code2][4];

                const card__tenki2 = document.querySelector(".card__tenki2");
                card__tenki2.innerHTML = ''; // Clear previous images
                const image2 = document.createElement("img");
                image2.src = `https://www.jma.go.jp/bosai/forecast/img/${weathercode[code2][0]}`;
                card__tenki2.appendChild(image2);

                const card__tenki2__bottom = document.querySelector(".card__tenki2__bottom");
                card__tenki2__bottom.innerHTML = ''; // Clear previous images
                const image2__bottom = document.createElement("img");
                image2__bottom.src = `https://www.jma.go.jp/bosai/forecast/img/${weathercode[code2][0]}`;
                card__tenki2__bottom.appendChild(image2__bottom);
            });
        })
        .catch(function (err) {
            console.log("Fetchエラー:", err);
        });
});


/////////////////////////////////////////////////////////////////

const kirikae = document.querySelector(".kirikae");
const form2 = document.querySelector(".card__form2");
const rand = document.querySelector(".randam");
kirikae.addEventListener("click", function () {
    const currentOpacity = parseFloat(getComputedStyle(form2).opacity);
    const currentOpacity2 = parseFloat(getComputedStyle(rand).opacity);
    if (currentOpacity === 0) {
        form2.style.opacity = '1';
        rand.style.opacity = '0';
    } else {
        form2.style.opacity = '0';
        rand.style.opacity = '1';
    }
})



const resetBtn = document.querySelector(".weather_Btn__ri");
resetBtn.addEventListener("click", function () {
    const Card__suu = document.querySelector(".card__suu");
    const text = document.querySelector(".card__text");
    const Card__suu__ja = document.querySelector(".card__suu__ja");
    text.innerHTML = "";
    Card__suu__ja.innerHTML = "";
    Card__suu.innerHTML = "";

    const card__tenki = document.querySelector(".card__tenki");
    const image = document.createElement("img");
    image.src = "";
    card__tenki.remove();

    const card__tenki__bottom = document.querySelector(".card__tenki__bottom");
    const image__bottom = document.createElement("img");
    image__bottom.src = "";
    card__tenki__bottom.remove();

    const Card__suu2 = document.querySelector(".card__suu2");
    const text2 = document.querySelector(".card__text2");
    const Card__suu2__ja = document.querySelector(".card__suu2__ja");
    text2.innerHTML = "";
    Card__suu2__ja.innerHTML = "";
    Card__suu2.innerHTML = "";

    const card__tenki2 = document.querySelector(".card__tenki2");
    const image2 = document.createElement("img");
    image2.src = "";
    card__tenki2.remove();

    const card__tenki2__bottom = document.querySelector(".card__tenki2__bottom");
    const image2__bottom = document.createElement("img");
    image2__bottom.src = "";
    card__tenki2__bottom.remove();


    const card__back = document.querySelector(".card__back");
    card__back.style.opacity = "1";

    const card__back2 = document.querySelector(".card__back2");
    card__back2.style.opacity = "1";
});