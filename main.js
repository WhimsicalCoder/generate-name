const optionMenu = document.querySelectorAll(".select-menu");

optionMenu.forEach(optionMenu => {

    const selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

    options.forEach(option =>{
        option.addEventListener("click", ()=>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active");
        });
    });
});

function button1Click() {
    const dropdown1 = document.getElementById('sBtn-text1').innerText;
    const dropdown2 = document.getElementById('sBtn-text2').innerText;
    const dropdown3 = document.getElementById('sBtn-text3').innerText;
    const dropdown4 = document.getElementById('sBtn-text4').innerText;
    const dropdown5 = document.getElementById('sBtn-text5').innerText;
    const dropdown6 = document.getElementById('sBtn-text6').innerText;

        const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Name: ${dropdown1}_${dropdown2}_${dropdown3}_${dropdown4}_${dropdown5}_${dropdown6}</p>
    `;

    const resultContainer = document.getElementById('container');

    resultDiv.classList.add("container");
}

function button2Click() {
    let reset = 'Select your option';

    document.getElementById('sBtn-text1').innerText = reset;
    document.getElementById('sBtn-text2').innerText = reset;
    document.getElementById('sBtn-text3').innerText = reset;
    document.getElementById('sBtn-text4').innerText = reset;
    document.getElementById('sBtn-text5').innerText = reset;
    document.getElementById('sBtn-text6').innerText = reset;



    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear the result div

    const resultContainer = document.getElementById('container');
    resultDiv.classList.remove("container");
}