var tagetAnchorTags=document.querySelectorAll('.nav-menu a')

for(let i=0; i<tagetAnchorTags.length;i++){
    tagetAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        let targetSectionId=this.textContent.trim().toLowerCase();
        let targetSection=document.getElementById(targetSectionId);
        
        let interval=setInterval(function(){
            var cordinate=targetSection.getBoundingClientRect();
            console.log(cordinate)
            if(cordinate.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}
