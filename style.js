var period = document.querySelectorAll('.period a')
for (var i = 0; i < period.length; i++){
    period[i].addEventListener('click', function () {
        var div = this.parentNode.parentNode.parentNode
        var li = this.parentNode
        if(li.classList.contains('active')){
            return false
        }
        div.querySelector('.period .active').classList.remove('active')
        li.classList.add('active')
    })
}