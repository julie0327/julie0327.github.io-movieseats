let seat = document.querySelectorAll('.seat')
let selectedseat=document.querySelectorAll('.row .seat.selected')
let count = document.querySelector('#count')
let total = document.querySelector('#total')
let price= document.querySelector('#movie')

let num=0
for (let i = 0; i < seat.length; i++) {
    seat[i].onclick = function () {
        /**
         * 你这里是想通过它的颜色来判断当前位置是否已经被选中过，这个想法在逻辑上没问题；
         * 但是你这里犯了两个错误：
         * 1. 判断是否相等的时候不应该使用单等号=，应该使用三等号 ===
         * 2. 颜色可能打印出来是rgb或者rgba，直接使用16进制的颜色去判断可能会有误差，最好的办法还是增加一个标志位属性来判断
         */
        // if (seat[i].style.backgroundColor = '#444451')
        // {
        //     seat[i].style.backgroundColor = '#6feaf6'
        //     num++
        //     count.innerHTML = num
        //     total.innerHTML = num * price.value
        // }
        // else { 
        //     seat[i].style.backgroundColor = '#444451'
        //  num--
        //  count.innerHTML = num
        //  total.innerHTML = num * price.value
        // }
        if (seat[i].getAttribute('isSelected')) {
            seat[i].removeAttribute('isSelected')
            seat[i].style.backgroundColor = '#444451'
            num--
            count.innerHTML = num
            total.innerHTML = num * price.value
        } else {
            seat[i].setAttribute('isSelected', true)
            seat[i].style.backgroundColor = '#6feaf6'
            num++
            count.innerHTML = num
            total.innerHTML = num * price.value
        }
    }
}







