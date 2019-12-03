function red(){
    document.getElementById("tekst").style.backgroundColor = "red";
}
function blue(){
    document.getElementById("tekst").style.backgroundColor = "blue";
}
function big(){
    document.getElementById("tekst").style.fontSize = "100px";
}
function small(){
    document.getElementById("tekst").style.fontSize = "30px";
}

function zmienkolor(x){
    document.getElementById("tekst").style.backgroundColor = x;
}
function zmienrozmiar(x){
    document.getElementById("tekst").style.fontSize = x;
}

window.onload = function (){
    document.getElementById("napisz").onclick = function(){
        alert("koniec!")
    }

    var kolor = document.getElementsByClassName("kolor");
    for (let i = 0; i < kolor.length ;i++){
        kolor[i].onclick = function(){
            zmienkolor(this.value);
        }
    }

    var rozmiar = document.getElementsByClassName("rozmiar");
    for (let i = 0; i < kolor.length ;i++){
        kolor[i].onclick = function(){
            zmienrozmiar(this.value);
        }
    }

    var span_ = document.getElementsByClassName("span_");
    for(let i = 0;i < span_.size();i++){
        span_[i].onclick = function(){
            
        }
    }
}