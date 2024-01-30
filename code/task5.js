document.write(`5. Створіть 5 див на сторінці, використовуючи getElementsByTagName і forEath поміняйте дивам колір фону.<br>`);

window.onload = () => {
    let divsAmount = 5;

    const [...body] = document.getElementsByTagName("body");

    for(let i = 0; i < divsAmount; i++){
        const div = document.createElement("div");
        div.style.padding = "2rem";
        div.style.margin = "2rem";
        body[0].append(div);

    }

    const [...div] = document.getElementsByTagName("div");
    div.forEach( item => {
        item.style.backgroundColor = "#4adfa1";
    });

}