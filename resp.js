burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
leftnav= document.querySelector('.leftnav')
rightnav= document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-classresp');
    leftnav.classList.toggle('v-classresp');
    navbar.classList.toggle('h-navresp');
    
    
})