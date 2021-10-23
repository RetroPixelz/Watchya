$(function(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    console.log(id);

    const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US"
    const imgurl = " https://api.themoviedb.org/3/movie/"+ id +"/images?api_key=60d58f5803d2a10a9d7bc0427dbc5023&language=en-US"

    $.getJSON(url,imgurl, function(result){

        console.log( result);

         console.log(imgurl)

         film_name =  result.original_title;
         film_desc =  result.overview;
         postrer = result.poster_path;
          rating = result.vote_average;
          votes = result.vote_count;
          ageRating =  result.adult;
          bgimg = result.backdrop_path;
          language = result.original_language;
          date =   result.release_date;
         duration = result.runtime;
        

       
       

     console.log(postrer)

        $(".title").text(film_name);
        $(".Time").text(date);
        $(".Speak").text( language );
        $(".Genre").text(duration );
        $(".Age-rating").text( ageRating );

        $(".hover").css("background-image", "url(" + bgimg + ")");
        

        $(".Rating").text(+" Rating:"+ rating);
        $(".Vote-ammount").text( votes + "Votes");


      

        $(".Movie-picture").attr("src",  result.poster_path);

        $(".descriptin").text ( film_desc);
    

    });
    
    $("burger").on(function () {
        $(".overlay").css("display", "block")
      });
    
});
