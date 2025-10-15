const sat=document.getElementById("sat");
const datumm=document.getElementById("datum");
const telo=document.getElementById("body");
const mesecSunce=document.getElementById("mesecSunce");
const dig=document.getElementById("digitalni");
function pokreniVreme(){
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month=[ "January","February","March","April","May","June","July","August","September","October","November","Decembar"];

    let d=new Date();
    /*Kreiranje vremena */
    let sati=d.getHours();
    let minuti=d.getMinutes();
    let sekunde=d.getSeconds();

/*Promena stranice za pomeranje sata to jest u zavisnosti od doba dana-tako izgleda prikaz stranice */
 if(sati>6 && sati<=10)
   {
    dig.classList.remove("tekst")
    telo.classList.remove("jedan6");
    telo.classList.add("sest10");
    mesecSunce.classList.remove("mesec");
    mesecSunce.classList.add("suncePrvo");
    
   }
   else if(sati>10 && sati<=14)

   {
     mesecSunce.classList.remove("suncePrvo");
     telo.classList.remove("sest10");
    telo.classList.add("deset14");
     mesecSunce.classList.add("sunceDrugo");
   }
   else if(sati>14 && sati<=18)
   {
       telo.classList.remove("deset14");
    telo.classList.add("cetrnest18");
    mesecSunce.classList.remove("sunceDrugo");
     mesecSunce.classList.add("sunceTrece");
   }
   else if(sati>18 && sati<=20)
   {
 telo.classList.remove("cetrnest18");
    telo.classList.add("osamnest20");
  mesecSunce.classList.remove("sunceTrece");
     mesecSunce.classList.add("sunceCetvrto");
         
    
   
   
   }
   else if(sati>20 && sati<=23)
   {
    
 telo.classList.remove("osamnest20");
    telo.classList.add("dvadeset23");
  mesecSunce.classList.remove("sunceCetvrto");
     mesecSunce.classList.add("mesecPrvi");
      dig.classList.add("tekst");
     
   }
      else if(sati>=0 && sati<=2)
   {
 telo.classList.remove("dvadeset23");
    telo.classList.add("dvadesettri2");
  mesecSunce.classList.remove("mesecPrvi");
     mesecSunce.classList.add("mesecDrugi");
      dig.classList.add("tekst");
   }



   else {

      
   {  telo.classList.remove("dvadesettri2");
    telo.classList.add("dva6");
     mesecSunce.classList.remove("mesecDrugi");
     mesecSunce.classList.add("mesecTreci");
    dig.classList.add("tekst");`w`
   }

   
   }




/*Kreiranje datuma*/
    let danBroj=d.getDate();        
    let dan=days[d.getDay()];
    let mesec=month[d.getMonth()];
    let godina=d.getFullYear();
    let datum=dan+", "+mesec+ " " +danBroj+", " +godina;
    
    /*Kreiranje vremena*/
    let satii=sati.toString();
    let minutii=minuti.toString();
    let sekundee=sekunde.toString();

    let h=satii.padStart(2,"0");
    let m=minutii.padStart(2,"0");
    let s=sekundee.padStart(2,"0");

    let vreme=h+":"+m+":"+s;
    sat.innerHTML=vreme;
    datumm.innerHTML=datum;


   

}
/*Pokretanje funkcije na svaku sekundu*/
const d=setInterval(pokreniVreme,1000);



