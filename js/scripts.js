class Validator {

    constructor() {
      this.validations = [
        'data-min-length',
        'data-max-length',
        'data-only-letters',
        'data-email-validate',
        'data-required',
        'data-equal',
        'data-password-validate',
      ]
    }
  
    // INICIA A VALIDAÇÃO DE TODOS OS CAMPOS
    validate(form) {
  
      // LIMPA TODAS AS VALIDAÇÕES ANTIGAS
      let currentValidations = document.querySelectorAll('form .error-validation');
  
      if(currentValidations.length) {
        this.cleanValidations(currentValidations);
      }
  
      // PEGA TODOS OS INPUTS
      let inputs = form.getElementsByTagName('input');
      // TRANSFORMA HTMLCollection EM ARR
      let inputsArray = [...inputs];
  
      // LOOP NOS INPUTS E VALIDAÇÃO MEDIANTE AOS ATRIBUTOS ENCONTRADOS
      inputsArray.forEach(function(input, obj) {
  
        // FAZ A VALIDAÇÃO DE ACORDO COM O ATRIBUTO DO INPUT
        for(let i = 0; this.validations.length > i; i++) {
          if(input.getAttribute(this.validations[i]) != null) {
  
            // LIMPA STRING PARA SABER O MÉTODO
            let method = this.validations[i].replace("data-", "").replace("-", "");
  
            // VALOR DO INPUT
            let value = input.getAttribute(this.validations[i])
  
            // INVOCA O MÉTODO
            this[method](input,value);
  
          }
        }
  
      }, this);
  
    }
  
    // MÉTODO PARA VALIDAR SE TEM UM MÍNIMO DE CARACTERES
    minlength(input, minValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `Este campo é obrigatório`;
  
      if(inputLength < minValue) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // MÉTODO PARA VALIDAR CAMPOS OBRIGATÓRIOS
    maxlength(input, maxValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `Este campo é obrigatório`;
  
      if(inputLength > maxValue) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // MÉTODO PARA VALIDAR STRINGS QUE SÓ CONTEM LETRAS
    onlyletters(input) {
  
      let re = /^[A-Za-z]+$/;;
  
      let inputValue = input.value;
  
      let errorMessage = `Este campo é obrigatório`;
  
      if(!re.test(inputValue)) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // VALIDAR E-MAIL
    emailvalidate(input) {
      let re = /\S+@\S+\.\S+/;
  
      let email = input.value;
  
      let errorMessage = `Este campo é obrigatório`;
  
      if(!re.test(email)) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // VERIFICAR SE UM CAMPO ESTÁ IGUAL O OUTRO
    equal(input, inputName) {
  
      let inputToCompare = document.getElementsByName(inputName)[0];
  
      let errorMessage = `Este campo é obrigatório`;
  
      if(input.value != inputToCompare.value) {
        this.printMessage(input, errorMessage);
      }
    }
    
    // EXIBIR INPUTS QUE SÃO NECESSÁRIOS
    required(input) {
  
      let inputValue = input.value;
  
      if(inputValue === '') {
        let errorMessage = `Este campo é obrigatório`;
  
        this.printMessage(input, errorMessage);
      }
  
    }
  
      // VALIDANDO O CAMPO DE SENHA
      passwordvalidate(input) {
  
      // EXPLODIR STRING EM ARRAY
      let charArr = input.value.split("");
  
      let uppercases = 0;
      let numbers = 0;
  
      for(let i = 0; charArr.length > i; i++) {
        if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
          uppercases++;
        } else if(!isNaN(parseInt(charArr[i]))) {
          numbers++;
        }
      }
  
      if(uppercases === 0 || numbers === 0) {
        let errorMessage = `Este campo é obrigatório`;
  
        this.printMessage(input, errorMessage);
      }
  
    }
  
      // MÉTODO PARA IMPRIMIR MENSAGENS DE ERRO
      printMessage(input, msg) {
    
      // CHECA OS ERROS PRESENTES NO INPUT
      let errorsQty = input.parentNode.querySelector('.error-validation');
  
      // IMPRIMIR ERRO SÓ SE NÃO HOUVER ERROS
      if(errorsQty === null) {
        let template = document.querySelector('.error-validation').cloneNode(true);
  
        template.textContent = msg;
    
        let inputParent = input.parentNode;
    
        template.classList.remove('template');
    
        inputParent.appendChild(template);
      }
  
    }
  
    // REMOVE TODAS AS VALIDAÇÕES PARA FAZER A CHECAGEM NOVAMENTE
    cleanValidations(validations) {
      validations.forEach(el => el.remove());
    }
  
  }
  
  let form = document.getElementById('register-form');
  let submit = document.getElementById('btn-submit');
  
  let validator = new Validator();
  
  // ENVIO DO FORM, QUE VALIDA OS INPUTS
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    validator.validate(form);
  });