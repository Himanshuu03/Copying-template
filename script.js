const main_header_part_1 = document.querySelector(".main-header-part-1");

document.querySelector(".hidden").addEventListener("click",()=>{
        main_header_part_1.classList.toggle("active");
})


const quickLinks =document.querySelector(".footer-side-two");

document.querySelector(".linker").addEventListener("click",()=>{
        quickLinks.classList.toggle("active");
})


const floater =document.querySelector(".floater");

document.querySelector(".join-now").addEventListener("click",()=>{
        floater.classList.toggle("active");
})
