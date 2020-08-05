var a;
var i =0 ;
    var images=['CHIFFRE/icons8-0-96.png','CHIFFRE/icons8-1-96.png','CHIFFRE/icons8-2-96.png','CHIFFRE/icons8-3-96.png',
    'CHIFFRE/icons8-4-96.png','CHIFFRE/icons8-5-96.png','CHIFFRE/icons8-6-96.png','CHIFFRE/icons8-7-96.png',
    'CHIFFRE/icons8-8-96.png','CHIFFRE/icons8-9-96.png','CHIFFRE/icons8-10-96.png','CHIFFRE/icons8-11-96.png',
    'CHIFFRE/icons8-12-96.png','CHIFFRE/icons8-13-96.png','CHIFFRE/icons8-14-96.png','CHIFFRE/icons8-15-96.png',
    'CHIFFRE/icons8-16-96.png','CHIFFRE/icons8-17-96.png','CHIFFRE/icons8-18-96.png','CHIFFRE/icons8-19-96.png',
    'CHIFFRE/icons8-20-96.png','CHIFFRE/icons8-21-96.png','CHIFFRE/icons8-22-96.png','CHIFFRE/icons8-23-96.png',
    'CHIFFRE/icons8-24-96.png','CHIFFRE/icons8-25-96.png','CHIFFRE/icons8-26-96.png','CHIFFRE/icons8-27-96.png',
    'CHIFFRE/icons8-28-96.png','CHIFFRE/icons8-29-96.png','CHIFFRE/icons8-30-96.png','CHIFFRE/icons8-31-96.png',
    'CHIFFRE/icons8-32-96.png','CHIFFRE/icons8-33-96.png','CHIFFRE/icons8-34-96.png','CHIFFRE/icons8-35-96.png',
    'CHIFFRE/icons8-36-96.png'];
    
    function nb_aleatoire()
    
{
    var nombreroulette=Math.random();
    return Math.floor(nombreroulette*36);
}  
  var nombreroulette = nb_aleatoire(nombreroulette) ;



  function go() {
      a = setInterval("diapo()",100);
      document.getElementById("gif").src=['Roulette Wheel and Ball System For Professionals.gif']
      
  }
  function stop() {
      clearTimeout(a);
      c=setTimeout("roulette()",50)
    document.getElementById("i3").src=images[nombreroulette];
    document.getElementById("gif").src=['Annotation 2020-08-05 153154.png']

  }
    
  
  function diapo()
{    
    document.slide.src=images[i]; 
    document.getElementById("i3").src=images[i];
    
    
    if(i<images.length-1)
    {
        i++;
    }
    else 
    {
        i=0;
    }
    
}




function roulette()

{
    var b = document.querySelector("#pmj").value ;
    var c = document.querySelector("#pmo").value ;
    
    var a = document.querySelector(".pari:checked").value;
    var d = document.querySelector("#number").value ;
    if(1*d>1*b)
    {
        d=b;
        alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
    }
    if (a==nombreroulette)
    {
        alert("Vous avez gagné "+36*d+" mille francs !");
        b=1*b+36*d;
        c=1*c-1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    
    else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
    {
        alert("Vous avez gagné "+d+" mille francs !");
        b=1*b+1*d;
        c=1*c-1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    else
    {
        alert("Mise perdue");
        b=1*b-1*d;
        c=1*c+1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    
    if(b==0)
        {
            alert("Echec cuisant ! Rafraîchissez la page pour rejouer .");
            document.querySelector("#number").disabled=true;
            document.querySelector("#number").value=0;
            
        }
    nombreroulette=nb_aleatoire(nombreroulette);



}



