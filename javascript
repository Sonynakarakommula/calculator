<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <title>Javascript Calculator</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

    body {
      margin: 0;
      box-sizing: border-box;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #4e4e4e;
    }

    .calculator {
      background: #dd6f6f;
      border-radius: 5px;
      padding: 5px;
      width: 300px;
      min-width: 300px;
      box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.4),
                        4px 4px 10px rgba(0, 0, 0, 0.7);
    }

    .output {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: relative;
      background: #ffffff;
      min-height: 50px;
      padding: 5px;
      margin: 0 1px 10px;
      border-radius: 0.25rem;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.5);
    }

    .output pre {
      text-align: right;
      font-size: 25px;
      margin: 0;
      font-family: 'Orbitron', sans-serif;
      width: 288px;
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .output pre::-webkit-scrollbar {
      display: none;
    }

    .output #upper {
      color: #424242;
      font-size: 18px;
    }

    .input {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .input button {
      width: calc(25% - 24px);
      height: 50px;
      margin: 8px 12px;
      border-radius: 50%;
      background-color: #c05d5d;
      box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.3),
                        1px 1px 5px rgba(94, 31, 31, 0.7);
      color: white;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: none;
    }

    .input button:hover {
      background-color: #b35555;
    }

    .input button:active {
      box-shadow: inset 1px 1px 5px rgba(94, 31, 31, 0.7),
                  inset -1px -1px 2px rgba(255, 255, 255, 0.3);
      color: #642929;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="calculator">
      <div class="output">
        <pre id="upper"></pre>
        <pre id="lower">0</pre>
      </div>
      <div class="input">
        <button onclick="pressAllClear()">AC</button>
        <button onclick="pressNum(this)">0</button>
        <button onclick="pressClear()"><i class="fas fa-backspace"></i></button>
        <button onclick="pressOperator(this)">+</button>
        <button onclick="pressNum(this)">1</button>
        <button onclick="pressNum(this)">2</button>
        <button onclick="pressNum(this)">3</button>
        <button onclick="pressOperator(this)">-</button>
        <button onclick="pressNum(this)">4</button>
        <button onclick="pressNum(this)">5</button>
        <button onclick="pressNum(this)">6</button>
        <button onclick="pressOperator(this)">&times;</button>
        <button onclick="pressNum(this)">7</button>
        <button onclick="pressNum(this)">8</button>
        <button onclick="pressNum(this)">9</button>
        <button onclick="pressOperator(this)">&div;</button>
        <button onclick="pressDot()">.</button>
        <button onclick="pressBracket(this)">(</button>
        <button onclick="pressBracket(this)">)</button>
        <button onclick="pressEqual()">=</button>
      </div>
    </div>
  </div>

  <script>
    // javascript calculator

    // upper output is for showing the expression
    let outputUpper = document.querySelector('#upper');
    // lower output is for showing the result
    let outputLower = document.querySelector('#lower');

    // function to get number input
    function pressNum(e) {
      if (outputLower.innerHTML === '0') {
        outputLower.innerHTML = e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }

    // clear all
    function pressAllClear() {
      outputUpper.innerHTML = '';
      outputLower.innerHTML = '0';
    }

    // clear one
    function pressClear() {
      outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
    }

    // calculate button
    function pressEqual() {
      let exp = outputLower.innerHTML;
      outputUpper.innerHTML = exp;
      exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
      let result;
      try {
        result = eval(exp);
        // if decimal number more than 4 decimal places
        if (result.toString().indexOf('.') !== -1) {
          result = result.toFixed(4);
        }
      } catch (e) {
        result = 'Error';
      }
      outputLower.innerHTML = result;
    }

    function pressOperator(e) {
      // check last operator
      let lastOperator = outputLower.innerHTML.slice(-1);
      if (lastOperator.includes('+', '-', '×', '÷')) {
        output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }

    function pressDot() {
      outputLower.innerHTML += '.';
    }

    function pressBracket(e) {
      outputLower.innerHTML += e.innerHTML;
    }

    // attach keyboard event
    document.addEventListener('keydown', function (e) {
      switch (e.key) {
        case '0':
          pressNum(document.querySelector('button:nth-child(2)'));
          break;
        case '1':
          pressNum(document.querySelector('button:nth-child(5)'));
          break;
        case '2':
          pressNum(document.querySelector('button:nth-child(6)'));
          break;
        case '3':
          pressNum(document.querySelector('button:nth-child(7)'));
          break;
        case '4':
          pressNum(document.querySelector('button:nth-child(9)'));
          break;
        case '5':
          pressNum(document.querySelector('button:nth-child(10)'));
          break;
        case '6':
          pressNum(document.querySelector('button:nth-child(11)'));
          break;
        case '7':
          pressNum(document.querySelector('button:nth-child(13)'));
          break;
        case '8':
          pressNum(document.querySelector('button:nth-child(14)'));
          break;
        case '9':
          pressNum(document.querySelector('button:nth-child(15)'));
          break;
        case '+':
          pressOperator(document.querySelector('button:nth-child(4)'));
          break;
        case '-':
          pressOperator(document.querySelector('button:nth-child(8)'));
          break;
        case '*':
          pressOperator(document.querySelector('button:nth-child(12)'));
          break;
        case '/':
          pressOperator(document.querySelector('button:nth-child(16)'));
          break;
        case '.':
          pressDot();
          break;
        case '(':
          pressBracket(document.querySelector('button:nth-child(18)'));
          break;
        case ')':
          pressBracket(document.querySelector('button:nth-child(19)'));
          break;
        case 'Enter':
          // prevent default action
          e.preventDefault();
          pressEqual();
          break;
        case 'Backspace':
          pressClear();
          break;
        case 'Escape':
          pressAllClear();
          break;
      }
    });
  </script>
</body>

</html>
