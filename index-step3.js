$(document).ready(main);

// Fonction principale
function main(){

$('.rei').click(function(){
      	location.reload();

      
       
    })


     var nb = Math.round(Math.random() * 3);
     console.log(nb)

	
     var tentatives = 3;

	 function clickValider(){

		

		var contenu = $('input').val();
		if (contenu == nb) {
			alert('Gagné');
			location.reload();

		} else if ( contenu > nb ) {
			tentatives--;
			alert(' Perdu, votre nombre est trop grand')
			$("span").text(tentatives);

		} else if ( contenu < nb ) {
			tentatives--;
			alert('Perdu, votre nombre est trop petit')
			$("span").text(tentatives);

		} 

		if (tentatives == 0){
			alert("partie Perdue") 
			location.reload();
		}
        





		 
	}


    $('.ici').click(function(){
    	console.log('teste');
    	clickValider();
    })

}