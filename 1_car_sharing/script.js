document.addEventListener('DOMContentLoaded', function () {

    const header = document.querySelector(".page-header")
    console.log(header);

    window.addEventListener("scroll", function () {
        if(window.scrollY > 150){
            header.classList.add('page-header--sticky')
        }else {
            header.classList.remove('page-header--sticky')
        }
        console.log('header')

    })


    header.classList.add("page-header--sticky")
    header.classList.remove("page-header--sticky")

})