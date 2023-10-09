var timer=15;
var score =-10;
var hitrn =0;

function incrementScore()
{
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function bubble()
{
    var clutter = "";

for(var i=1 ; i<=200;i++){
var x= Math.floor(Math.random()*10)
clutter += `<div class="bubble">${x}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer()
{
    var timerint = setInterval(function() {
        if(timer >0)
        {
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000);


}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}


document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickname = (Number(dets.target.textContent));
    if(clickname==hitrn)
    {
        incrementScore();
        bubble();
        getnewhit();
    }
});
runtimer();
bubble();
getnewhit();
incrementScore();
