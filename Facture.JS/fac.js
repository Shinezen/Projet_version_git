function addition(){
    var a = document.getElementById("number").value;
    var b = document.getElementById("number").value;
    var c = Number(a)+Number(b)

    t3.value = c;

}
function Resultat(){
    var v3="";
    a = document.getElementById("t1").value;
    b = document.getElementById("t2").value;
    v3 = a;
    a = b;
    b = v3;

    t1.value = a;
    t2.value = b;
}
