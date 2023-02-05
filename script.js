let questions = [{
    question: "Gurita, cumi-cumi, penyu, paus adalah contoh binatang yang hidup di ...",
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
    question: "Manakah yang termasuk ciri-ciri binatang melata?",
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
    question: "Manakah yang termasuk binatang mamalia?",
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
];


// console.log(questions[0].answers[0].option);

let no = 0;

window.onload = function () {
    document.getElementById("pertanyaan").innerHTML = questions[0].question;
    document.getElementById("nomer").innerHTML = no;

    let text = "";
   
    for(let j=0; j<4; j++){
        let pilihanJawaban = '<button onClick="cekJawaban('+j+')" id="pilihan'+ j +'" value="'+ questions[no].answers[j].answer+'">' + questions[no].answers[j].option + '</button>';
        text += pilihanJawaban  + "<br>";
        document.getElementById("demo").innerHTML = text;
    }
};


function next() {
    if (no < questions.length - 1) {
        no += 1;
        document.getElementById("pertanyaan").innerHTML = questions[no].question;
        document.getElementById("nomer").innerHTML = no;

       
    let text = "";
   
        for(let j=0; j<4; j++){
            let pilihanJawaban = '<button onClick="cekJawaban('+j+')" id="pilihan'+ j +'" value="'+ questions[no].answers[j].answer+'">' + questions[no].answers[j].option + '</button>';
            text += pilihanJawaban  + "<br>";
            document.getElementById("demo").innerHTML = text;
        }    
    }

  
}

function prev() {
    if (no > 0) {
        no -= 1;
        document.getElementById("pertanyaan").innerHTML = questions[no].question;
        document.getElementById("nomer").innerHTML = no;
        
            
    let text = "";
   
        for(let j=0; j<4; j++){
            let pilihanJawaban = '<button onClick="cekJawaban('+j+')" id="pilihan'+ j +'" value="'+ questions[no].answers[j].answer  +'">' + questions[no].answers[j].option + '</button>';
            text += pilihanJawaban  + "<br>";
            document.getElementById("demo").innerHTML = text;
        }   
    }
}


let nilai = 0;
function cekJawaban(i) {
        var jwb = document.getElementById('pilihan'+i).value;
        if(jwb == 'true'){
            nilai +=10;
            console.log(nilai);
            return nilai;
        }else if(jwb == 'false'){
            nilai -= 10;
            return nilai;
        }
}


    





