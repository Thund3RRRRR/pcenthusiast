const letters = "01";

let interval = null;

let target = document.querySelector("[data-value]")

window.onload = event => {
    let iteration = 0;
            
    clearInterval(interval);
            
    interval = setInterval(() => {
         target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return target.dataset.value[index];
            }
                
            return letters[Math.floor(Math.random() * 2)]
            })
        .join("");
                
        if(iteration >= target.dataset.value.length){ 
            clearInterval(interval);
        }
                
        iteration += 1 / 3;
    }, 30);
}
