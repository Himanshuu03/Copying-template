const main_header_part_1 = document.querySelector(".main-header-part-1");

document.querySelector(".hidden").addEventListener("click",()=>{
        main_header_part_1.classList.toggle("active");
})


const quickLinks =document.querySelector(".footer-side-two");

document.querySelector(".linker").addEventListener("click",()=>{
        console.log("Hello");
        quickLinks.classList.toggle("active");
})
