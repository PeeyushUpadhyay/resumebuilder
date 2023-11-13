function addNewField1() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('sklField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let sklOb = document.getElementById('skl');
    let sklAddButtonOb = document.getElementById('sklAddButton');

    sklOb.insertBefore(newNode, sklAddButtonOb);
}

function addNewField2() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('edField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let edOb = document.getElementById('ed');
    let edAddButtonOb = document.getElementById('edAddButton');

    edOb.insertBefore(newNode, edAddButtonOb);
}

function addNewField3() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('ceField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let ceOb = document.getElementById('ce');
    let ceAddButtonOb = document.getElementById('ceAddButton');

    ceOb.insertBefore(newNode, ceAddButtonOb);
}

function addNewField4() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eduField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let eduOb = document.getElementById('edu');
    let eduAddButtonOb = document.getElementById('eduAddButton');

    eduOb.insertBefore(newNode, eduAddButtonOb);
}

function generateCv() {

    //name section field
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML= nameField;

    //contact section field
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    //email section field
    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;

    //address section field
    document.getElementById('addT1').innerHTML = document.getElementById('addressField').value;

    //linkedin profile link field
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedinField').value;

    //github account field
    document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;

    //instagram account field
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;

    //personal website field
    document.getElementById('stT').innerHTML = document.getElementById('stField').value;

    //objective field
    document.getElementById('objectiveT').innerHTML = document.getElementById('objField').value;

    //QualficationAcademic 
    let eduqual = document.getElementsByClassName('eduField'); 
    let str3 = ''

    for(let e of eduqual) {
        str3 = str3 + `<li> ${e.value} </li>`
    }
    document.getElementById('eduT').innerHTML = str3;
    
    //work exp
    let skill = document.getElementsByClassName('sklField'); 
    let str = ''

    for(let e of skill) {
        str = str + `<li> ${e.value} </li>`
    }
    document.getElementById('sklT').innerHTML = str;


    

    //project experience
    let eduQua = document.getElementsByClassName('edField'); 
    let str1 = ''

    for(let e of eduQua) {
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById('edT').innerHTML = str1;

    

    
    let cerT = document.getElementsByClassName('ceField'); 
    let str2 = ''

    for(let e of cerT) {
        str2 = str2 + `<li> ${e.value} </li>`
    }
    document.getElementById('cerT').innerHTML = str2;

    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';

    //Image field
    let file = document.getElementById('imgField').files[0]; //getting first(index at 0) file
    console.log(file);
    let reader = new FileReader();

    reader.readAsDataURL(file);
    
    console.log(reader.result);
    
    //set your profile image to template
    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    };
}
//printCv function


window.onload = function () {
    document.getElementById('downloadCV').addEventListener("click", () => {
        const resumeClone = this.document.getElementById("resume-template").cloneNode(true);
        const printButton = resumeClone.querySelector("#downloadCV");
        const backButton = resumeClone.querySelector("#back");
        if (printButton) {
            printButton.remove();
        }
        if (backButton) {
            backButton.remove();
        }
        var opt = {
            top: 1,
            bottom: 0,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            
        };
        html2pdf().from(resumeClone).set(opt).save();
    })
}

