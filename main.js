function bai1() {
    alert("Xin chao");
}


function increaseValue(num) {
    num += 1;
    return num;
}

function bai2() {
    let inputNum = parseInt(prompt("Enter a number"));
    alert(increaseValue(inputNum));
}

function compareAB(a, b) {
    if (a > b)
        alert("a is greater than b");
    else
        return alert(a + b);
}

function bai3() {
    let x = parseInt(prompt("Enter number a: "));
    let y = parseInt(prompt("Enter number b: "))
    compareAB(x, y);
}

function addNumbers() {
    {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
}

function bai4() {
    result = 0;
    alert(result);
    result = addNumbers();
    alert(result);
}

let starName = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function findName() {
    let inputName = prompt("Enter A Star's Name: ");
    return inputName;
}
function checkName(keyword) {
    for (let i = 0; i < starName.length; i++){
        if (keyword === starName[i]){
            return i;
        }
    }
    return -1;
}
function bai5() {
    star = findName();
    if (checkName(star) === -1)
    {
        alert("Star's name not found");
    } else{
        alert(constellation[checkName(star)]);
    }
}