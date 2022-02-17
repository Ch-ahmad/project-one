let path = window.location.pathname;
if(!path.endsWith('/')) { path += '/'; }

if(path === '/page2/') {
    let pay_btn = document.getElementById("pay_btn");

    pay_btn.onclick = () => {
        alert("Success!");
    }
}
