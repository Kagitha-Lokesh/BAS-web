document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var videoContainer = document.getElementById("video-container");
    var video = document.getElementById("videoplayer");

    if (videoContainer && video) { 
        videoContainer.style.display = "flex"; 
        video.play(); 
    }
});
const videopara = document.getElementById("video-para1");
const submit = document.getElementById("submit-btn");
const book = [
    
    "./assets/book1.mp4", "./assets/book2.mp4", "./assets/book3.mp4", "./assets/book4.mp4", "./assets/book5.mp4"
];
const fear = [
    "./assets/fear1.mp4", "./assets/fear2.mp4", "./assets/fear3.mp4", "./assets/feel1.mp4"
];
const fight= [
    "./assets/fight1.mp4", "./assets/fight2.mp4", "./assets/himulation1.mp4"
]
const himulation = [
    "./assets/himulation1.mp4","./assets/himulation2.mp4"
]
const lazy = [
    "./assets/lazy1.mp4", "./assets/lazy2.mp4", "./assets/lazy3.mp4", "./assets/knowledge.mp4"
];
const love = [
    "./assets/love1.mp4", "./assets/love2.mp4", "./assets/love3.mp4", "./assets/love4.mp4","./assets/love5.mp4","./assets/love6.mp4"
];
const lovefail = [
    "./assets/lovefail1.mp4", "./assets/lovefail2.mp4"
];
const luck = [
    "./assets/luck1.mp4", "./assets/luck2.mp4", "./assets/luck3.mp4", "./assets/luck4.mp4"
];
const marrage = [
    "./assets/marrage1.mp4", "./assets/marrage2.mp4", "./assets/marrage3.mp4"
];
const sad = [
    "./assets/sad1.mp4", "./assets/sad2.mp4", "./assets/sad3.mp4"
];
const single = [
    "./assets/single1.mp4", "./assets/single2.mp4", "./assets/single3.mp4", "./assets/single4.mp4","./assets/single5.mp4"
];
const unluck = [
    "./assets/unluck1.mp4", "./assets/unluck2.mp4", "./assets/unluck3.mp4", "./assets/unluck4.mp4","./assets/unluck5.mp4","./assets/unluck6.mp4","./assets/unluck7.mp4","./assets/unluck8.mp4","./assets/unluck9.mp4"
];



age = Number(age)


submit.onclick = function() { 
    let ageInput = document.getElementById("age"); 
    let usernameInput = document.getElementById("user-name");
    let raasiInput = document.getElementById("raasi");
    let video = document.getElementById("videoplayer"); 

    if (!ageInput || !usernameInput || !raasiInput || !video) return; 

    let ageValue = ageInput.value.trim();
    let usernameValue = usernameInput.value.trim();
    let raasiValue = raasiInput.value.trim();

    if (ageValue === "" || usernameValue === "" || raasiValue === "") { 
        videopara.textContent = "Input sarigga Ivvu baabu...";
        
        video.src = "./assets/input_warning.mp4";
        video.load(); 
        video.play(); 

        return; 
    }
    if (raasiValue === "mesha") { 
        videopara.textContent = "Aadhaayam : 02 , RaajaPujyam : 05  ,  Vyaam : 14 , Avamanam : 07";
        document.getElementById("video-para2").innerHTML = "Problems in 2nd half of the year <br> Fights with relatives or friends or lover <br> single for this year...";
        const combinedvideos = [single,lovefail,fear,fight,unluck];
        //unluck in 2nd half,chances of fights with relatives,students will get good marks,single ,
        
function getRandomVideo(){
    const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
    const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
    return randomVideo; // Now it returns a valid .mp4 path
}
        let randomVideo = getRandomVideo(); // Get a valid random video
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return; 
    }
    
    
    
    if (raasiValue === "vrishabha") { 
        // good time,students,marrage,love
        videopara.textContent = "Aadhaayam : 11 , RaajaPujyam : 01  ,  Vyaam : 05 , Avamanam : 03";
        document.getElementById("video-para2").innerHTML = "Full luck <br> Behave lazy without concentrating on career <br>Chances of marrage or love ";

        const combinedvideos = [luck,marrage,lazy,love];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }

        
 
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return; 
        
        }

    if (raasiValue === "mithuna") { 
        //jan - sep bad,oct- dec luck,fights,love failure,job opp,,students,book,single
        videopara.textContent = "Aadhaayam : 14 , RaajaPujyam : 04  ,  Vyaam : 02 , Avamanam : 03";
        document.getElementById("video-para2").innerHTML = "Full luck. <br> Chances of break-up and being single.<br> Whatever you do, You'll be caught right away. ";

        const combinedvideos = [luck,single,book,lovefail];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }

        
 
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return;  
    }
    if (raasiValue === "karkataka") { 
        //bad 50-50,fights,lazy,love,book
        videopara.textContent = "Aadhaayam : 08 , RaajaPujyam : 07  ,  Vyaam : 02 , Avamanam : 03";
        document.getElementById("video-para2").innerHTML = "50% luck & 50% unluck. <br> Chances of love and fights with relatives and friends. <br> Behave lazy without concentrating on career. ";
        const combinedvideos = [luck,unluck,love,lazy,book,fight];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return; 
    }
    if (raasiValue === "simha") { 
        //luck -25,himulation,fights,lovefail,single,feel,sad,book
        videopara.textContent = "Aadhaayam : 11 , RaajaPujyam : 03  ,  Vyaam : 11 , Avamanam : 06";
        document.getElementById("video-para2").innerHTML = "25% luck & 75% unluck. <br> Chances of break-up and being single.<br>Chances of Himulation.  ";

        const combinedvideos = [unluck,fight,lovefail,single,fear,sad,book,himulation];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return; 
    }

    if (raasiValue === "kanya") { 
        // 100-luck,marrage,happy,lovefail,fights,single
        videopara.textContent = "Aadhaayam : 14 , RaajaPujyam : 02  ,  Vyaam : 06 , Avamanam : 06";
        document.getElementById("video-para2").innerHTML = "Full luck. <br> Chances of love or marrage and fights with relatives and friends.<br>Chances of Himulation.";

        const combinedvideos = [luck,marrage,himulation,sad,fight];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return;  
    }
    if (raasiValue === "tula") { 
        //100 - luck,love,marrage,lazy,
        videopara.textContent = "Aadhaayam : 11 , RaajaPujyam : 02  ,  Vyaam : 05 , Avamanam : 02";
        document.getElementById("video-para2").innerHTML = "Full luck. <br> Chances of love or marrage .<br>Behave lazy without concentrating on career.";
        const combinedvideos = [luck,marrage,sad,fight];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return;  
    }
    if (raasiValue === "vrischika") { 
        //luck,sad,book,love
        videopara.textContent = "Aadhaayam : 02 , RaajaPujyam : 05  ,  Vyaam : 14 , Avamanam : 02";
        document.getElementById("video-para2").innerHTML = "50% Luck. <br> Chances of Love.<br>Chances of Himulation.<br>Whatever you do, You'll be caught right away.";
        const combinedvideos = [luck,love,sad,book];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return;  
    }
    if (raasiValue === "dhanusu") { 
        //luck-75,mamrrage,fights,book,lazy,lovefail
        videopara.textContent = "Aadhaayam : 05 , RaajaPujyam : 01  ,  Vyaam : 05 , Avamanam : 05";
        document.getElementById("video-para2").innerHTML = "75% Luck & 25% Unluck. <br> Chances of marrage or Break-up and fights with friends and Relatives.<br>Behave lazy without concentrating on career.<br>Whatever you do, You'll be caught right away.";

        const combinedvideos = [luck,luck,luck,unluck,marrage,fight,book,lazy,lovefail];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return; 
    }
    if (raasiValue === "makara") { 
        //luck,love,marage,lazy
        videopara.textContent = "Aadhaayam : 08 , RaajaPujyam : 04  ,  Vyaam : 14 , Avamanam : 05";
        document.getElementById("video-para2").innerHTML = "Full Luck. <br> Chances of marrage or Love.<br>Behave lazy without concentrating on career.";
        const combinedvideos = [luck,love,marrage,lazy];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return;  
    }
    if (raasiValue === "kumbha") { 
        //luck-25,lovefail,fights,sad,fear,book,himulation,single
        videopara.textContent = "Aadhaayam : 08 , RaajaPujyam : 07  ,  Vyaam : 14 , Avamanam : 05";
        document.getElementById("video-para2").innerHTML = "25% luck & 75% unluck. <br> Chances of break-up and being single.<br>Chances of Himulation.<br>Whatever you do, You'll be caught right away.<br>Chances of Fights with Relatives and Friends  ";

        const combinedvideos = [unluck,lovefail,fight,sad,fear,book,himulation,single];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return; 
    }
    if (raasiValue === "meena") { 
        //luck-50,unluck,fear,love,marrage,sad
        videopara.textContent = "Aadhaayam : 05 , RaajaPujyam : 03  ,  Vyaam : 05 , Avamanam : 01";
        document.getElementById("video-para2").innerHTML = "50% Luck & 50% Unluck. <br> Chances of marrage or Love.";
        const combinedvideos = [luck,unluck,marrage,sad,fear];    
        function getRandomVideo(){
            const randomCategory = combinedvideos[Math.floor(Math.random() * combinedvideos.length)];
            const randomVideo = randomCategory[Math.floor(Math.random() * randomCategory.length)];
            return randomVideo; 
    }
        let randomVideo = getRandomVideo(); 
        video.src = randomVideo;
        video.load(); 
        video.play(); 
        return;  
    }

    let age = Number(ageValue);

    if (isNaN(age) || age === 17) { 
        videopara.textContent = "Valid Input";
    } else {
        videopara.textContent = "Bye"; 
    }
};
