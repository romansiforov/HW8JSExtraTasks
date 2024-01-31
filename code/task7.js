document.write(`<br>7. Створіть картинку та кнопку з назвою "Змінити картинку"
зробіть так щоб при завантаженні сторінки була картинка
https://itproger.com/img/courses/1476977240.jpg
При натисканні на кнопку вперше картинка замінилася на
https://itproger.com/img/courses/1476977488.jpg
при другому натисканні щоб картинка замінилася на
https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`);

let firstClickExecuted = false;
window.onload = () => {
    document.querySelector(".btn").onclick = () => {
        const image = document.querySelector("#img > img");
        if(!firstClickExecuted){
            image.setAttribute("src", "https://itproger.com/img/courses/1476977488.jpg");
            firstClickExecuted = true;
        } else {
            image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png");
            firstClickExecuted = false;
        }
        
    }
}