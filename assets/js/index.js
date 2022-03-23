let path = window.location.pathname;
if(!path.endsWith('/')) { path += '/'; }

if(path === '/page2/') {
    let pay_btn = document.getElementById("pay_btn");

    pay_btn.onclick = () => {
        alert("Success!");
    }
}

let inputs = document.getElementsByTagName("input");
console.log(inputs);
for(let i=0; i<inputs.length; i++) {
    inputs[i].onchange = function() {
        console.log("FIRED!")
        let inp = inputs[i];
        if(inp.value === "") {
            inp.classList.remove("input-filled");
        } else {
            if(!inp.classList.contains("input-filled")) {
                inp.classList.add("input-filled");
            }
        }
    }
}


