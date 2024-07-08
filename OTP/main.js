var numbers = '0123456789';
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var mixed = numbers + letters;

function generateOtp(){
  var value = document.getElementsByName("otp");
  var selected ;
  var otp = '';
  for(let i =0;i<value.length;i++){
    if(value[i].checked){
      selected =parseInt(value[i].value);
    }
  }
  if(selected === 1){
    for(let j = 0; j<6 ;j++){
      otp+=letters[Math.round(Math.random()*25)];
    }
  }
  else if(selected === 2){
    for(let j = 0; j<6 ;j++){
      otp+=numbers[Math.round(Math.random()*9)];
    }
  }
  else if(selected === 3){
    for(let j = 0; j<6 ;j++){
      otp+=mixed[Math.round(Math.random()*35)];
    }
  }
  var result =  document.getElementById('res')
  result.innerText = otp;
}