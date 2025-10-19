function createCalculator(){
    return {
        display: document.querySelector('.display'),

        start(){
            this.pressButton();
            this.pressEnter();
            this.pressBackspace();
        },
        sum(){
            let sumAccount = this.display.value;
            
            try{
                sumAccount = eval(sumAccount)
                if(!sumAccount){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(sumAccount);
            } catch(e){
                alert('Conta inválida');
            }
        },

        pressButton(){
            document.addEventListener('click', (e) =>{
                const el = e.target;
            
                if(el.classList.contains('btn-num')){
                    this.btnToDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.displayClear();
                }
                if(el.classList.contains('btn-dell')){
                    this.displayDelete();
                }
                if(el.classList.contains('btn-eq')){
                    this.sum();
                }
            this.display.focus();
        }
        )},

        btnToDisplay(value){
            this.display.value += value;
        },

        displayClear(){
            this.display.value = '';
        },

        displayDelete(){
            this.display.value = this.display.value.slice(0, -1);
        },

        pressEnter(){
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){
                    this.sum();
                }
            });
        },

        pressBackspace(){
            this.display.addEventListener('keydown', (e) => {
                if(e.keyCode === 8){
                    e.preventDefault();
                    this.displayClear();
                }
            })
        },
    };
}
const calculator = createCalculator();
calculator.start();