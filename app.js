// https://calculator.swiftutors.com/interest-coverage-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const interestCoverageRatioRadio = document.getElementById('interestCoverageRatioRadio');
const EBITRadio = document.getElementById('EBITRadio');
const interestExpenseRadio = document.getElementById('interestExpenseRadio');

let interestCoverageRatio;
let EBIT = v1;
let interestExpense = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

interestCoverageRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT';
  variable2.textContent = 'Interest Expense';
  EBIT = v1;
  interestExpense = v2;
  result.textContent = '';
});

EBITRadio.addEventListener('click', function() {
  variable1.textContent = 'Interest Coverage Ratio';
  variable2.textContent = 'Interest Expense';
  interestCoverageRatio = v1;
  interestExpense = v2;
  result.textContent = '';
});

interestExpenseRadio.addEventListener('click', function() {
  variable1.textContent = 'Interest Coverage Ratio';
  variable2.textContent = 'EBIT';
  interestCoverageRatio = v1;
  EBIT = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(interestCoverageRatioRadio.checked)
    result.textContent = `Interest Coverage Ratio = ${computeInterestCoverageRatio().toFixed(2)}`;

  else if(EBITRadio.checked)
    result.textContent = `EBIT = ${computeEBIT().toFixed(2)}`;

  else if(interestExpenseRadio.checked)
    result.textContent = `Interest Expense = ${computeInterestExpense().toFixed(2)}`;
})

// calculation

function computeInterestCoverageRatio() {
  return Number(EBIT.value) / Number(interestExpense.value);
}

function computeEBIT() {
  return Number(interestCoverageRatio.value) * Number(interestExpense.value);
}

function computeInterestExpense() {
  return Number(EBIT.value) / Number(interestCoverageRatio.value);
}