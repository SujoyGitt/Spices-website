window.addEventListener('scroll',()=>{
    let y = window.scrollY;
    if (y > 500) {
        document.querySelector('.navbar-expand-sm').classList.add('bg-white');
        document.querySelector('.navbar-expand-sm').classList.add('navbar-light');
        document.querySelector('.navbar-expand-sm').classList.remove('bg-transparent');
        document.querySelector('.navbar-expand-sm').classList.remove('navbar-dark');
    }else{
        document.querySelector('.navbar-expand-sm').classList.remove('bg-white');
        document.querySelector('.navbar-expand-sm').classList.remove('navbar-light');
        document.querySelector('.navbar-expand-sm').classList.add('bg-transparent');
        document.querySelector('.navbar-expand-sm').classList.add('navbar-dark');
    }
})




