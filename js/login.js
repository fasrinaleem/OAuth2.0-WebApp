$(document).ready(function(){

    var clientId ="1045552380959-r9uddvhlhftn5mr4csgmq4ssss8bp4m5.apps.googleusercontent.com" ;

    var redirect_uri="http://localhost:8000/OAuthApp-SSD/";

    var scope="https://www.googleapis.com/auth/drive";

    var url="";


    $("#login").click(function(){

        signIn(clientId,redirect_uri,scope,url);
    
    
    })


    function signIn(clientId,redirect_uri,scope,url){

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";

        window.location = url;
        
    }


});

