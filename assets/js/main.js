// Calculadora
function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressBackspace();
      this.pressEnter();
    },

    pressBackspace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          this.clearDisplay();
        }
      });
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.equal();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    del() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equal() {
      let conta = this.display.value;
      try {
        conta = eval(conta)
        if (!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.del();
        }

        if (el.classList.contains('btn-eq')) {
          this.equal();
        }
      });
    },

    btnParaDisplay(value) {
      this.display.value += value;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();