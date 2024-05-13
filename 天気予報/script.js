const Btn = document.querySelector(".weather_Btn");
Btn.addEventListener("click", function () {

    const select = document.getElementById("weather_code");
    const selectedIndex = select.selectedIndex; //1,2,3...

    if (selectedIndex === 0) {
        console.log("都道府県が選択されていません。");
        return;
    }

    const selectedOption = select.options[selectedIndex]; //<option value="110000">北海道</option>
    const selectedPrefecture = selectedOption.text; //北海道
    const selectedCode = selectedOption.value; //110000

    console.log(`選択された都道府県: ${selectedPrefecture}`);
    console.log(`選択された都道府県のコード: ${selectedCode}`);

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${proxyUrl}https://www.jma.go.jp/bosai/forecast/data/forecast/${selectedCode}.json`;

    fetch(url)
        .then(function (response) {
            response.json().then(function (weather) {
                console.log(weather);
                const result = document.querySelector(".target");
                const ulElm = document.createElement("ul");
                for (const key in weather) {
                    ulElm.insertAdjacentHTML("beforeend", `<li>${weather[key]}</li>`);
                }
                result.append(ulElm);
            });
        })
        .catch(function (err) {
            console.log("Fetchエラー:", err);
        });


    /////////////////////////////////////////////////////////////////

    const select2 = document.getElementById("weather_code2");
    const selectedIndex2 = select2.selectedIndex;

    if (selectedIndex2 === 0) {
        console.log("都道府県が選択されていません。");
        return;
    }

    const selectedOption2 = select2.options[selectedIndex2];
    const selectedPrefecture2 = selectedOption2.text;
    const selectedCode2 = selectedOption2.value;

    console.log(`選択された都道府県: ${selectedPrefecture2}`);
    console.log(`選択された都道府県のコード: ${selectedCode2}`);

    fetch(url)
        .then(function (response) {
            response.json().then(function (weather) {
                console.log(weather);
                const result = document.querySelector(".target");
                const ulElm = document.createElement("ul");
                for (const key in weather) {
                    ulElm.insertAdjacentHTML("beforeend", `<li>${weather[key]}</li>`);
                }
                result.append(ulElm);
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
