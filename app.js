let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("input", () => {
    if (input.value == "" || !input. checkValidity()  ) {
        
    input.nextElementSibling.style.color ="red" ;
return
    } else {
        input.nextElementSibling.style.color ="green";
    }
    
    });
    });
let arr = [];

function addUser() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let table = document.getElementById("userTable");
    let Btn = document.createElement("button");
    Btn.innerText = "Sil";
    Btn.style.backgroundColor = "red";
    let create = document.createElement("tr");
    let create1 = document.createElement("td");
    let create2 = document.createElement("td");
    let create3 = document.createElement("td");

    create1.innerText = name;
    create2.innerText = age;
    create3.append(Btn);

    create.append(create1);
    create.append(create2);
    create.append(create3);
    table.append(create);

    let obj = { username: name, userage: age };
    arr.push(obj);
    console.log( arr);

    Btn.addEventListener("click", () => {
        create.remove(); 
        arr = arr.filter(item => item.username !== name || item.userage !== age);
        console.log( arr); 
    });
}

