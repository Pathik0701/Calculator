let calculation = localStorage.getItem('calculation') || '';

    function updateCalculation(value){
      calculation += value;
      // console.log(calculation);
      localStorage.setItem('calculation',calculation);
    }

    function saveCalculation(){
      localStorage.setItem('calculation', calculation);
    }
    
    document.querySelector('.js-total').innerText = `${calculation}`;

    function showCalculation(){ 
      document.querySelector('.js-total').innerHTML = `${calculation}`;
    }

    document.querySelector('.js-total').innerText;