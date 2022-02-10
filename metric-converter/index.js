function convert(){
    var name = prompt()

document.getElementsByTagName('p')[0].textContent = name
calculate()
}
function calculate(){


const val = document.getElementsByTagName('p')[0].innerText

    
    metertofeetString = val + ' meters =' + (val * 3.281).toFixed(2) + ' feet  ';
    document.getElementsByTagName('p')[1].textContent  = metertofeetString
    feettoMeterString = val + ' feet =' + (val / 3.281).toFixed(2) + ' meters';
    document.getElementsByTagName('p')[2].textContent = feettoMeterString

    /* liter to gallon*/
    litertogal = val + ' liters = ' + (val /  3.785).toFixed(2) + ' gallons'
    galtoliter = val + ' gallons = ' + (val *  3.785).toFixed(2) + ' liters'
    document.getElementsByTagName('p')[3].textContent  = litertogal
    document.getElementsByTagName('p')[4].textContent  = galtoliter


    /*kilo to pounds*/
    kilotolb = val + ' kilo = ' + (val * 2.205).toFixed(2) + ' pounds'
    lbtokilo = val + ' pounds = ' + (val / 2.205).toFixed(2) + ' kilo'
    document.getElementsByTagName('p')[5].textContent  = kilotolb
    document.getElementsByTagName('p')[6].textContent  = lbtokilo
}