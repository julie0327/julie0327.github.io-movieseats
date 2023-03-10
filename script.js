let seat = document.querySelectorAll('.seat')
let selectedseat=document.querySelectorAll('.row .seat.selected')
let count = document.querySelector('#count')
let total = document.querySelector('#total')
let price= document.querySelector('#movie')

let num=0
for (let i = 0; i < seat.length; i++) {
    seat[i].onclick = function () {
        if (seat[i].style.backgroundColor = '#444451')
        {
            seat[i].style.backgroundColor = '#6feaf6'
            num++
            count.innerHTML = num
            total.innerHTML = num * price.value
        }
        else { 
            seat[i].style.backgroundColor = '#444451'
         num--
         count.innerHTML = num
         total.innerHTML = num * price.value
        }
         
    }
}





