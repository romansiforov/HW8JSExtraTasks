document.write(`8.Створює на сторінці 10 парахрафів і зробіть так, щоб при натисканні на параграф він зникав<br>`);


window.onload = () => {
    let pAmount = 10;

    const [...body] = document.getElementsByTagName("body");

    for (let i = 0; i < pAmount; i++) {
        const p = document.createElement("p");
        p.style.padding = "2rem";
        p.style.margin = "2rem";
        p.classList.add("red");

        body[0].append(p);
    }
    const [...paragraphs] = document.querySelectorAll("p");

    paragraphs.forEach(item => {
        item.onclick = () => {
            item.classList.remove("red");
            item.classList.add("blue");
            setTimeout( () => {item.remove();}, 700);
        }
    });


}