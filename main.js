// NITE MODE for when you're coding late at night and need to block the blue light wavelenghts :p
	function niteMode(){
		var darkBackground = "BLACK"; document.getElementById('nitemode').style.backgroundColor=darkBackground;
	} 
	
// Clock
function startTime() {
    var today = new Date();
    var mo = today.getMonth();
    var d = today.getDate();
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dateTime').innerHTML =
    "Date " + mo + "." + d + "." + y + "   Time " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
  
  
// INCOME with onkeyup function
function addTotalIncome() {
  
  var totalIncome1 = document.getElementById('income1');
  var totalIncome2 = document.getElementById('income2');
  
  var totalIncome = Number(totalIncome1.value) + Number(totalIncome2.value) ;
	
// Formats result to Currency	
  var n = totalIncome;
  var currency = n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
  document.getElementById('totalIncomeField').innerHTML = currency; 
// ...dots disappear to be replaced by currency	
  document.getElementById('moneyDots').style.display = 'none';
	
  /*/ Format result to Currency.. NICE AND SIMPLE CODE BUT NOT SUPPORTED WIDELY ON MOBILE :(	
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});
  document.getElementById('totalIncomeField').innerHTML = (formatter.format(totalIncome)); 
*/
}

// EXPENSES with onkeyup function
function addtotalexpense() {

  var totalrent = document.getElementById('rent');
  var totalphone = document.getElementById('phonebill');
  var totalnet = document.getElementById('internet');
  var totalel = document.getElementById('electricity');
  var totalgro = document.getElementById('groceries');
  var totalcar = document.getElementById('car');
  var totalinsure = document.getElementById('insure');
  var totalother1 = document.getElementById('other1');
  var totalother2 = document.getElementById('other2');
  var totalother3 = document.getElementById('other3');
  
  var totalexpense = Number(totalrent.value) + Number(totalphone.value) + Number(totalnet.value) + Number(totalel.value) + Number(totalgro.value) + Number(totalcar.value) + Number(totalinsure.value) + Number(totalother1.value) + Number(totalother2.value) + Number(totalother3.value);

// Formats result to Currency	
  var nB = totalexpense;
  var currencyB = nB.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
  document.getElementById('totalexpensefield').innerHTML = currencyB; 
// ...dots disappear to be replaced by currency	
  document.getElementById('moneyDots2').style.display = 'none';	 
}

// REMAINDER with Onclick function button
function remainder() {
  
  var totalIncome1 = document.getElementById('income1');
  var totalIncome2 = document.getElementById('income2');
  
  var totalIncome = Number(totalIncome1.value) + Number(totalIncome2.value) ;	
	
  var totalrent = document.getElementById('rent');
  var totalphone = document.getElementById('phonebill');
  var totalnet = document.getElementById('internet');
  var totalel = document.getElementById('electricity');
  var totalgro = document.getElementById('groceries');
  var totalcar = document.getElementById('car');
  var totalinsure = document.getElementById('insure');
  var totalother1 = document.getElementById('other1');
  var totalother2 = document.getElementById('other2');
  var totalother3 = document.getElementById('other3');
  
  var totalexpense = Number(totalrent.value) + Number(totalphone.value) + Number(totalnet.value) + Number(totalel.value) + Number(totalgro.value) + Number(totalcar.value) + Number(totalinsure.value) + Number(totalother1.value) + Number(totalother2.value) + Number(totalother3.value);
	
  var remainderNet = Number(totalIncome) - Number(totalexpense);

// Formats result to Currency	
  var nC = remainderNet;
  var currencyC = nC.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
  document.getElementById('remainderField').innerHTML = currencyC; 
// ...dots disappear to be replaced by currency	
  document.getElementById('moneyDots3').style.display = 'none';	
		
    var saveMe = document.getElementById('whatToDO');
	var cuts = document.getElementById('whatNotToDO');

if (remainderNet > 0) { 
	    saveMe.innerHTML = "<br>&#8679 Great Job! this remainder is the key part in building your Money Machine. Let's see what happens if you save this over time!";
}
    else { cuts.innerHTML = "<br>&#8679 Uh Oh, you need to cut some expenses..."; }
    
  var remainderNet2 = remainderNet ;

// Formats result to Currency	
  var nD = remainderNet2;
  var currencyD = nD.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
  document.getElementById('remainderField2').innerHTML = currencyD; 
// ...dots disappear to be replaced by currency	
  document.getElementById('moneyDots4').style.display = 'none';	
 }
	
function calculateSavings() {
  
  var totalIncome1 = document.getElementById('income1');
  var totalIncome2 = document.getElementById('income2');
  
  var totalIncome = Number(totalIncome1.value) + Number(totalIncome2.value) ;	
	
  var totalrent = document.getElementById('rent');
  var totalphone = document.getElementById('phonebill');
  var totalnet = document.getElementById('internet');
  var totalel = document.getElementById('electricity');
  var totalgro = document.getElementById('groceries');
  var totalcar = document.getElementById('car');
  var totalinsure = document.getElementById('insure');
  var totalother1 = document.getElementById('other1');
  var totalother2 = document.getElementById('other2');
  var totalother3 = document.getElementById('other3');
  
  var totalexpense = Number(totalrent.value) + Number(totalphone.value) + Number(totalnet.value) + Number(totalel.value) + Number(totalgro.value) + Number(totalcar.value) + Number(totalinsure.value) + Number(totalother1.value) + Number(totalother2.value) + Number(totalother3.value);
	
  var remainderNet = Number(totalIncome) - Number(totalexpense);
  
  var xYears = document.getElementById('xYearsId');
        
  var totalSavings = 
  remainderNet * Number(xYears.value) * 12;

// Formats result to Currency	
  var nE = totalSavings;
  var currencyE = nE.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
  document.getElementById('totalSavingsId').innerHTML = currencyE; 

// ...dots disappear to be replaced by currency	
  document.getElementById('moneyDots5').style.display = 'none';		
 	
}

function calculateSavingsCompounded() {
  
  var compoundInterest =
  document.getElementById('compoundId');
  var xYears = document.getElementById('xYearsId');
    
  var totalIncome1 = document.getElementById('income1');
  var totalIncome2 = document.getElementById('income2');
  
  var totalIncome = Number(totalIncome1.value) + Number(totalIncome2.value) ;	
	
  var totalrent = document.getElementById('rent');
  var totalphone = document.getElementById('phonebill');
  var totalnet = document.getElementById('internet');
  var totalel = document.getElementById('electricity');
  var totalgro = document.getElementById('groceries');
  var totalcar = document.getElementById('car');
  var totalinsure = document.getElementById('insure');
  var totalother1 = document.getElementById('other1');
  var totalother2 = document.getElementById('other2');
  var totalother3 = document.getElementById('other3');
  
  var totalexpense = Number(totalrent.value) + Number(totalphone.value) + Number(totalnet.value) + Number(totalel.value) + Number(totalgro.value) + Number(totalcar.value) + Number(totalinsure.value) + Number(totalother1.value) + Number(totalother2.value) + Number(totalother3.value);
	
  var remainderNet = totalIncome - totalexpense;
    
  var p = 0; //starting principal is set to $0
  var PMT = Number(remainderNet); //the monthly deposit amount
  var r = Number(compoundInterest.value)/ 100; //the annual interest rate
  var n = 12; //the number of times per year interest is compounded
  var t = Number(xYears.value); //the number of years the money is invested 
    
  var formula = p * (Math.pow ((1 + r/n), n*t)) + PMT * ((Math.pow ((1 + r/n), n*t)) - 1) / (r/n);

// Formats result to Currency	
  var nF = formula;
  var currencyF = nF.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
  document.getElementById('totalSavingsCompoundedId').innerHTML = currencyF; 

// ...dots disappear to be replaced by currency	
  document.getElementById('moneyDots6').style.display = 'none';		
		
console.log(formula + " this")	

//compounded difference
  var diff =  nF - PMT * n * t ;

// Formats result to Currency	
  var nG = diff;
  var currencyG = nG.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
  document.getElementById('differenceId').innerHTML = currencyG; 

// ...dots disappear to be replaced by currency	
  document.getElementById('moneyDots7').style.display = 'none';		
	
	/*
	//Use these logs to test each operation
	
	var p = 5000;
    var PMT = 100;
    var r = 5 / 100;
    var n = 12;
    var t = 10;

	console.log(p + '<br>'); 
    console.log(PMT + '<br>'); 
	console.log(r + '<br>'); 
    console.log(n + '<br>'); 
    console.log(t + '<br>'); 
	console.log('inside:' + '<br>');
    console.log(r/n + '<br>'); 
    console.log(n*t + '<br>'); 
    console.log(1 + r/n + '<br>'); 
	console.log( p * (Math.pow ((1 + 0.004166666666666667), 120)) + '<br>'); // answer should be = 8235.04748845143
	console.log( ((Math.pow ((1 + 0.0041666), 120 )) - 1) + '<br><br>');
	console.log(PMT * ((Math.pow ((1 + r/n), n*t)) - 1) / (r/n) + '<br><br>'); // answer should be = 15528.23 
    var formula = 
	 p * (Math.pow ((1 + r/n), n*t)) + PMT * ((Math.pow ((1 + r/n), n*t)) - 1) / (r/n);
	console.log('total = ' + formula.toFixed(2));
	//total should be = $23,763.28 
*/

}

// Warren Buffett...Slides
var imageTracker = 'r';
function changead() {
	var ad1 = document.getElementById('advert1');
	if (imageTracker === 'r') {
	ad1.src = '/webdesign/moneymachine/images/warrenHead.png';
	imageTracker = 'b';		document.getElementById('advertBackground').style.backgroundColor="BLUE";	

} else if (imageTracker === 'b') {
	ad1.src = '/webdesign/moneymachine/images/warrenHead.png';
	imageTracker = 'p';
	var imgBackground = "PINK"; 	document.getElementById('advertBackground').style.backgroundColor=imgBackground;
	
} else if (imageTracker === 'p'){
	ad1.src = '/webdesign/moneymachine/images/warrenHead.png';
	imageTracker = 'r';
	var imgBackground = "RED"; 	document.getElementById('advertBackground').style.backgroundColor=imgBackground;

}
}
var timer = setInterval('changead()',2000);

// clearInterval(time); // to stop interval
