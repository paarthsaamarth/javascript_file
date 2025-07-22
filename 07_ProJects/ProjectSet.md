# Projects Related to DOM

## project link below

[I am the LINK, kya dekh rha hai CLICK kar na](https://stackblitz.com/edit/dom-project-chaiaurcode-brcr7uzm?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solutions 

## PROJECT 1 :- Color Changer 

``` javascript 

const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (but) {
    but.addEventListener('click', function (e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = 'pink';
        }
        if(e.target.id === 'aquamarine'){
            body.style.backgroundColor = 'aquamarine';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

```

## PROJECT 2 :- BMI Generator 

```  javascript

const form = document.querySelector('form')

//const height = parseInt(document.querySelector('#height').value);
/*You are fetching the value as soon as the page loads — before the user even gets a chance to type anything.So height and weight will grab whatever is in the input fields at the time the JS file runs — which is usually empty*/

form.addEventListener('submit', function (e) {
    e.preventDefault();//for preventing it's default action of sending data to server on submit

    /*form.addEventListener('submit', function (e) {
    const height = parseInt(document.querySelector('#height').value);
    ...
    });*/
    //This above line runs only when the user hits Submit, so .value will be exactly what they just typed. unlike the value typed outside form.addEventListner

    const height = parseInt(document.querySelector('#height').value);//.value takes input from the user in form of string and parseInt convert it into integer value.
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if((height === '' || height < 0 || isNaN(height)) && (weight === '' || weight < 0 || isNaN(weight))){
        result.innerHTML = `Please enter a VALID height & weight`
        return;
    }

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a VALID height`
        return;
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a VALID weight`
        return;
    }

    const bmi = (weight / ((height*height)/10000)).toFixed(2);

    if(bmi < 18.6){
        result.innerHTML = `your BMI is -> ${bmi} and you are UNDER Weight`;
    }else if (bmi > 18.6 && bmi < 24.9){
        result.innerHTML =  `your BMI is -> ${bmi} and you are in NORMAL Range`;
    }else{
        result.innerHTML =  `your BMI is -> ${bmi} and you are OVERWEIGHT`;
    }

})

 ```

 ## PROJECT 3 :- Digital Clock 🕒 

 ``` javascript

const clock = document.getElementById('clock')

//setInterval :- It repeatedly calls a function after a fixed delay (in milliseconds). SYNTAX :- setInterval(callbackFunction, delayInMilliseconds);

setInterval(function(){
    const date = new Date();//Get the current time with new Date()
    clock.innerHTML = date.toLocaleTimeString();//Convert it to a readable time with .toLocaleTimeString()
},1000);

```

## PROJECT 6 :- Random Color Generator in a Particular Intervals 

``` javascript 

const randomColors = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]//mujhe 0 bhi chaiye isliye +1 nhi kiya
  }
  return color;
}

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let interval;
start.addEventListener('click',function(){
  const changingColor = function(){
    document.body.style.backgroundColor = randomColors()
  }
  if(!interval)
    interval = setInterval(changingColor,1500);
})

stop.addEventListener('click',function(){
  clearInterval(interval)
  interval = null
})

```

## PROJECT 5 :- KeyBoard check whick key pressed

``` javascript

window.addEventListener('keydown',(e) => {
  insert.innerHTML = `
    <table>
      <tr>
        <th>key</th>
        <th>keytype</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? "spc" : e.key}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  `
})  

 ```