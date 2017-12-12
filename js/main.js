// Frank Diaz, DIG 1102, Professor Kahn Mai

// Declare a function to that contains all of the calculations for the user's tax income.
(function() {
function calculateTax() {
    var amount = document.querySelector(".incomeInput").value || 0;
    var taxes = {
        '"Employee" Social Security': .062 * amount,
        '"Employer" Social Security': .062 * amount,
        '"Employee" Medicare': .0145 * amount,
        '"Employer" Medicare': .0145 * amount,
        'Federal Income Tax': 0
    };

// Create variables that contain arrays below that contain all the 2017 Tax Brackets datas and percentages below. Also include querySelectors for that connect these to the radio buttons in the DOM.
    var singleBrackets = parseInt(document.querySelector("input[name='single']:checked").value)[
    {max: 9325, pct: .10 },
    {max: 37950, pct: .15 },
    {max: 919000, pct: .25 },
    {max: 191650, pct: .28 },
    {max: 416700, pct: .33 },
    {max: 418400, pct: .35 },
    {max: null, pct: .396}
];

var marriedBrackets = parseInt(document.querySelector("input[name='married']:checked").value)[
    {max: 18650, pct: .10 },
    {max: 75900, pct: .15 },
    {max: 153100, pct: .25 },
    {max: 233350, pct: .28 },
    {max: 416700, pct: .33 },
    {max: 470700, pct: .35 },
    {max: null, pct: .396 }
];

var householdBrackets = parseInt(document.querySelector("input[name='head']:checked").value)[
    {max: 13350, pct: .10 },
    {max: 50800, pct: .15 },
    {max: 131200, pct: .25 },
    {max: 212500, pct: .28 },
    {max: 416700, pct: .33 },
    {max: 444500, pct: .35 },
    {max: null, pct: .396 }
];

// Create variables below that will assis the if conditional statement below in tax income calculation.
var running = amount;
var lastChunk = 0;
var chunk = 0;
var tax = 0;

// Create three if conditional statements below that calculate the three tax brackets from above. 
$.each(singleBrackets, function(i, singleBracket) {
    var chunk = singleBracket.max;
    
    if (running < chunk) {
        chunk = running;
        running = 0;
    } else {
        running -= chunk;
    }
    
    tax += chunk * singleBracket.pct;
    lastChunk = chunk;
});
    
$.each(singleBrackets, function(i, marriedBracket) {
    var chunk = marriedBracket.max;
    
    if (running < chunk) {
        chunk = running;
        running = 0;
    } else {
        running -= chunk;
    }
    
    tax += chunk * marriedBracket.pct;
    lastChunk = chunk;
});
    
$.each(householdBrackets, function(i, householdBracket) {
    var chunk = householdBracket.max;
    
    if (running < chunk) {
        chunk = running;
        running = 0;
    } else {
        running -= chunk;
    }
    
    tax += chunk * householdBracket.pct;
    lastChunk = chunk;
})
// Write code below that prints the Rederal Income Tax calculated results into the DOM.
taxType['Federal Income Tax'] = tax;
var total = 0;
var h = $.map(taxType, function(v, p) {
    total += v;
    return '<tr><th>' + p + '</th><td>' + num(v) + '</td></tr>';
});

// Write code below that displays the calculated tax percentage results into the DOM.
h.push('<tr><th>Total</th><td>' + num(total) + '</th></tr>');
var percentTotal = Math.round(total/amount * 1000)/10;
h.push('<tr><th>Percent</th><td>' + percentTotal + '</td></tr>');
document.querySelector(".tax-result").innerHTML = '<table>' + h.join('') + '</table>';

};
   
// Create a function that displays the results for the calculated tax in the DOM.
function num(n) {
    n = n.toString();
    var i = n.indexOf('.');
    if (i == -1) {
        return n + '.00';
        }
    i = n.length - i;
    if (i == 3)
        return n;
    
    return n + '0';
 };
})();