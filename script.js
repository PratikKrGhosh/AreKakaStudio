(() => {let copy = document.querySelector("#copy");
let d = new Date();
let year = d.getFullYear() || 2023;

copy.innerHTML = `Copyright &copy; ${year} - The PK Guy`;})()