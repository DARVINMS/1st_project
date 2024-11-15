var formvalid = document.getElementById("formvalid")
var fname1 = document.getElementById("fname")
var lastname = document.getElementById("lsname")
var username = document.getElementById("user")
var Email = document.getElementById("email")
var address = document.getElementById("address")
var country = document.getElementById("countryname")
var state = document.getElementById("statename")
var pin = document.getElementById("pinnumber")
var cardname = document.getElementById("cardname")
var cardnumber = document.getElementById("cardnumber")
var expiredate = document.getElementById("expiredate")
var cvvnumber = document.getElementById("cvvnumber")
var promono = document.getElementById("promono")


formvalid.addEventListener('submit', e => {
    e.preventDefault()
    submitform()
    promocode()
})
function submitform() {
    var fnvalue = fname1.value.trim()
    var lsvalue = lastname.value.trim()
    var uservalue = username.value.trim()
    var emailvalue = Email.value.trim()
    var addvalue = address.value.trim()
    var countryvalue = country.value.trim()
    var statevalue = state.value.trim()
    var pinvalue = pin.value.trim()
    var cardnamevalue = cardname.value.trim()
    var cardnumbervalue = cardnumber.value.trim()
    var datevalue = expiredate.value.trim()
    var cvvvalue = cvvnumber.value.trim()

    
    if (fnvalue == '') {
        displayalert(fname1, "Please Fill the First name ")
    }
    else if (fnvalue % 1 == 0) {
        displayalert(fname1, "Please Enter only Alphabet")
    }
    else  (
        displaycomplete(fname1)
    )
    if (lsvalue == '') {
        displayalert(lastname, "Please Fill the Last name")
    }
    else if (lsvalue % 1 == 0) {
        displayalert(lastname, "Please Enter only Alphabet")
    }
    else  (
        displaycomplete(lastname)
    )
    if (uservalue == '') {
        displayalert(username, "Please Fill the Username")
    }
    else if (uservalue % 1 == 0) {
        displayalert(username, "Please Enter Alphabet and Number ")
    }
    else if (uservalue.length < 5) {
        displayalert(username, "Please Enter Username more than 5 Character ")
    }
    else  (
        displaycomplete(username)
    )
    if (addvalue == '') {
        displayalert(address, "Please fill the Address  ")
    }
    else if (addvalue.length<20) {
        displayalert(address, "Please fill the valid Address  ")
    }
    else  (
        displaycomplete(address)
    )
    if (countryvalue == '') {
        displayalert(country, "Please Fill the Country name ")
    }
    else  if (countryvalue.length < 5) {
        displayalert(country, "Please Enter Valid  Country name ")
    }
    else  (
        displaycomplete(country)
    )
    if (statevalue == '') {
        displayalert(state, "Please Fill the State name ")
    }
    else if (statevalue.length < 3) {
        displayalert(state, "Please Enter Valid State name ")
    }
    else  (
        displaycomplete(state)
    )
    if (pinvalue == '') {
        displayalert(pin, "Please Fill the Pin number ")
    }
    else if(isNaN(pinvalue)){
        displayalert(pin,"Enter Only Valid Pin NUmber")
    }
    else if(pinvalue.toString().length != 6){
        displayalert(pin,"Enter Valid Pin NUmber")
    }
    else  (
        displaycomplete(pin)
    )
    if (cardnamevalue == '') {
        displayalert(cardname, "Please Fill the Card name ")
    }
    else if(cardnamevalue !== cardnamevalue.toUpperCase()){
        displayalert(cardname, "Please Fill the Card name as in Card")
    }
    else  (
        displaycomplete(cardname)
    )
    if (cardnumbervalue == '') {
        displayalert(cardnumber, "Please Fill the Card number ")
    }
    else if(cardnumbervalue.toString().length != 16){
        displayalert(cardnumber,"Enter Valid Card NUmber")
    }
    else  (
        displaycomplete(cardnumber)
    )
    if (datevalue == '') {
        displayalert(expiredate, "Please Fill the ExpireDate  ")
    }
    else  (
        displaycomplete(expiredate)
    )
    if (cvvvalue == '') {
        displayalert(cvvnumber, "Please Fill the CVV number ")
    }
    else if(cvvvalue.toString().length != 3){
        displayalert(cvvnumber,"Enter Valid CVV NUmber")
    }
    else  (
        displaycomplete(cvvnumber)
    )
    if (emailvalue == ""){
        displayalert(Email,"Please Enter Email ID")
    }
    else if(!emailvalid(emailvalue)){
        displayalert(Email,"Enter Valid Email ID")
    }
    else  (
        displaycomplete(Email)
    )
    if (!document.querySelector("input[name='cards']:checked")){
        checkboxOK(detail,"Must Select Any One of the Card")
    }
    else {
        checkboxOFF(detail)
    }
  
    
}
function displayalert(a, message) {
    var controlform = a.parentElement
    var alert1 = controlform.querySelector(".Error")
    alert1.innerHTML = '<p style="color:red; font-size:smaller;">'+message+'</p>'
}
function displaycomplete(b){
    var controlform = b.parentElement
    var alert1 = controlform.querySelector(".Error")
    alert1.innerHTML = ""
}

function emailvalid(c){
    var pattern =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return c.match(pattern)
}

document.getElementById("credit").checked = false;

function checkboxOK(d,message){
    var controlform =d.parentElement
    var detail = controlform .querySelector("#detail")
    detail.innerHTML = '<p style="color:red; font-size:smaller;">'+message+'</p>'
}
function checkboxOFF(e){
    var controlform =e.parentElement
    var detail = controlform .querySelector("#detail")
    detail.innerHTML = ""
}

// promo code 
redeem.addEventListener('submit', e => {
    e.preventDefault()
    promocode()
})
function promocode(){
    var promoval = promono.value.trim()
    if(promoval == ''){
        displayalert(promono,"Enter  PromoCode")
        console.log(promoval.length)
    }
   
    else if( (!promoval == promoval.toUpperCase()) ||promoval.length<5){
      
        displayalert(promono,"Enter valid PromoCode")
    }
    else {
        displaycomplete(promono)
    }
}
