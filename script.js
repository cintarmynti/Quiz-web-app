let questions = [{
    question: "1. Gurita, cumi-cumi, penyu, paus adalah contoh binatang yang hidup di ...",
    answers: [{
        option: "air tawar",
        answer: false,
    },
    {
        option: "air laut",
        answer: true
    },
    {
        option: "air payau",
        answer: false
    },
    {
        option: "air conditioner",
        answer: false
    },
    ],
},
{
    question: "2. Manakah yang termasuk ciri-ciri binatang melata?",
    answers: [
        {
            option: "Termasuk kelompok hewan berdarah dingin",
            answer: true
        },
        {
            option: "Ciri tubuh memiliki daun telinga",
            answer: false
        },
        {
            option: "Hidup area di dataran tinggi",
            answer: false
        },
        {
            option: "Bernafas dengan insang",
            answer: false
        },
    ],
},
{
    question: "3. Manakah yang termasuk binatang mamalia?",
    answers: [
        {
            option: "kura-kura",
            answer: false
        },
        {
            option: "burung",
            answer: false
        },
        {
            option: "singa laut",
            answer: true
        },
        {
            option: "ular",
            answer: false
        },
    ],
},
{
    question: "4. Ibukota negara rusia adalah ...",
    answers: [
        {
            option: "Amsterdam",
            answer: false
        },
        {
            option: "Denmark",
            answer: false
        },
        {
            option: "Paris",
            answer: false
        },
        {
            option: "Moscow",
            answer: true
        },
    ],
},

{
    question: "5. Ibukota negara Belanda adalah ...",
    answers: [
        {
            option: "Amsterdam",
            answer: true
        },
        {
            option: "Denmark",
            answer: false
        },
        {
            option: "Paris",
            answer: false
        },
        {
            option: "Moscow",
            answer: false
        },
    ],
},

{
    question: "6. Berdasarkan makanannya, ular termasuk jenis ...",
    answers: [
        {
            option: "Melata",
            answer: false
        },
        {
            option: "Herbivora",
            answer: false
        },
        {
            option: "Karnivora",
            answer: true
        },
        {
            option: "Omnivora",
            answer: false
        },
    ],
},

{
    question: "7. Berdasarkan makanannya, ular termasuk jenis ...",
    answers: [
        {
            option: "Melata",
            answer: false
        },
        {
            option: "Herbivora",
            answer: false
        },
        {
            option: "Karnivora",
            answer: true
        },
        {
            option: "Omnivora",
            answer: false
        },
    ],
},

{
    question: "8. Negara yang awalnya satu negara adalah ...",
    answers: [
        {
            option: "Bosnia dan Herzegovina",
            answer: false
        },
        {
            option: "Korean dan China",
            answer: false
        },
        {
            option: "Serbia dan Montenegro",
            answer: true
        },
        {
            option: "Trinad dan Tobago",
            answer: false
        },
    ],
},

{
    question: "9. Negara yang tidak pernah dijajah Asean ...",
    answers: [
        {
            option: "Timor Leste",
            answer: false
        },
        {
            option: "Thailand",
            answer: true
        },
        {
            option: "Malaysia",
            answer: false
        },
        {
            option: "Singapura",
            answer: false
        },
    ],
},

{
    question: "10. Mesir adalah negara yang masuk dalam benua ...",
    answers: [
        {
            option: "Afrika",
            answer: true
        },
        {
            option: "Asia",
            answer: false
        },
        {
            option: "Eropa",
            answer: false
        },
        {
            option: "Amerika",
            answer: false
        },
    ],
},



];


// console.log(questions[0].answers[0].option);

let no = 0;

window.onload = function () {
    document.getElementById("pertanyaan").innerHTML = questions[0].question;
    // document.getElementById("nomer").innerHTML = no;

    let text = "";
   
    for(let j=0; j<4; j++){
        let pilihanJawaban = '<button class="w-100 p-3 btn-pil" onClick="cekJawaban('+j+')" id="pilihan'+ j +'" value="'+ questions[no].answers[j].answer+'">' + questions[no].answers[j].option + '</button>';
        text += pilihanJawaban  + "<br>";
        document.getElementById("demo").innerHTML = text;
    }
};


function next() {
    if (no < questions.length - 1) {
        no += 1;
        document.getElementById("pertanyaan").innerHTML = questions[no].question;
        // document.getElementById("nomer").innerHTML = no;
       
    let text = "";
   
        for(let j=0; j<4; j++){
            let pilihanJawaban = '<button class="w-100 p-3 btn-pil" onClick="cekJawaban('+j+')" id="pilihan'+ j +'" value="'+ questions[no].answers[j].answer+'">' + questions[no].answers[j].option + '</button>';
            text += pilihanJawaban  + "<br>";
            document.getElementById("demo").innerHTML = text;
        }    
    }else if(no == questions.length - 1){
        setTimeout(totalScore, 1000);
        var element = document.getElementById("soal");
        element.classList.add("d-none");

        var ScoreTotal = document.getElementById("score");
        ScoreTotal.classList.remove("d-none");
    }

  
}

let score = [];
let nilai = 0;
function cekJawaban(i) {

        var jwb = document.getElementById('pilihan'+i).value;
        next();
        if(jwb == 'true'){
            nilai +=10;
            console.log(10);
            score.push(10);
            return nilai;
        }else if(jwb == 'false'){
            nilai += 0;
            return nilai;
        }
}

function totalScore(){
    let sum = score.reduce(function(a, b){
        return a + b;
    });
    document.getElementById("scorePemain").innerHTML = sum;
      console.log(sum);
}








    





