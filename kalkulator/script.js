window.onload = function(){
    let policz = document.getElementsByClassName("licz");
    for (let i = 0; i < policz.length;i++){
        policz[i].onclick = licz(this.value);
    }
}

function licz(operacja){
    
    let liczba1 = parseFloat(document.getElementById("liczba1").value);
    let liczba2 = parseFloat(document.getElementById("liczba2").value);
    if(operacja == '+'){
        write_wynik(liczba1 + liczba2)
        document.getElementById("wynik").innerHTML = x;
    }
    if(operacja == "-"){
        write_wynik(liczba1 - liczba2)
    }
    if(operacja == "x"){
        write_wynik(liczba1 * liczba2)
    }
    if(operacja == "/"){
        write_wynik(liczba1 / liczba2)
    }

    switch(operacja){
        case "+":
            write_wynik(liczba1 + liczba2);
            break;
        case "-":
            write_wynik(liczba1 - liczba2);
            break;
    }
}

function write_wynik(x){
    
    document.getElementById("wynik").innerHTML = x;
}