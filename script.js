let seat = document.querySelectorAll('.seat')
let count = document.querySelector('#count')
let total = document.querySelector('#total')
let price= document.querySelector('#movie')

let num=0
for (let i = 0; i < seat.length; i++) {
    seat[i].onclick = function () {
        if (seat[i].classList.contains('occupied')) {
            console.log(11);
            return
        }
        else if (seat[i].getAttribute('isSelected')  )
        {seat[i].removeAttribute('isSelected')
            seat[i].style.backgroundColor = '#444451'
            num--
            count.innerHTML = num
            total.innerHTML = num * price.value
        }
        else { 
            seat[i].setAttribute('isSelected',true)
            seat[i].style.backgroundColor = '#6feaf6'
         num++
         count.innerHTML = num
         total.innerHTML = num * price.value
        }        
    }
}





