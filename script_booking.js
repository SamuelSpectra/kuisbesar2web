// Step 1
// Switch Place Departure to Arrive and The Opposite
function switchBtn() { 
    let plc1 = document.getElementById("depart").value;
    let plc2 = document.getElementById("arrive").value;
    let temp = plc1;

    document.getElementById("depart").value = plc2;
    document.getElementById("arrive").value = temp;
}

// To Disable and Enable Return Date Input
( function() {
    let checkbox = document.getElementById('dateCheck');
    let datereturn = document.getElementById('come');

    checkbox.addEventListener('click', function() {
        if (this.checked) {
            datereturn.disabled = '';
        } else {
            datereturn.disabled = 'false';
        }
    });
})();

// Addition and Substraction Number of Passengers
let adult = 0;  
let children = 0;
let baby = 0;
function addAdult() {
    adult++;
    document.getElementById("numAdult").innerHTML = adult;
}

function minAdult() {
    if (adult>0) {
        adult--;
        document.getElementById("numAdult").innerHTML = adult;
    }    
}

function addChildren() {
    children++;
    document.getElementById("numChildren").innerHTML = children;
}

function minChildren() {
    if (children>0) {
        children--;
        document.getElementById("numChildren").innerHTML = children;        
    }
}

function addBaby() {
    baby++;
    document.getElementById("numBaby").innerHTML = baby;
}

function minBaby() {
    if (baby>0) {
        baby--;
        document.getElementById("numBaby").innerHTML = baby;        
    }
}

// Search Button to Move on Step 2 Html
function searchSchedule() {
    window.location.href = "booking-2.html";
}

// STEP 2
// Search Again and Move to Step 1
function searchAgain() {
    window.location.href = "booking-1.html";
}

// Choose Schedule
function chooseItem() {
    window.location.href = "booking-3.html";
}

// Back to Home
function backHome() {
    window.location.href = "index.html";
}

// STEP 3
// Back Button to Step 2
function backBtn() {
    window.location.href = "booking-2.html";
}

// Next Button to Step 4
function nextBtn() {
    window.location.href = "booking-4.html";
}

// STEP 4
// Button to Confirm Payment
function pay() {
    window.location.href = "booking-5.html";
}

// To Select Bank Payment
function bankBtnBCA() {
    document.getElementById("bca").style.opacity = "1";
    document.getElementById("mandiri").style.opacity = "0.5";
}

function bankBtnMandiri() {
    document.getElementById("mandiri").style.opacity = "1";
    document.getElementById("bca").style.opacity = "0.5";
}