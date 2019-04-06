app.config(function($routeProvider){
    $routeProvider
    .when("/",
     { templateUrl:"main.html" })
     .when("/green",
     { templateUrl:"green.html"})
     .when("/red",
     { templateUrl:"red.html"})
     .when("/blue",
     { templateUrl:"blue.html"})
     .when("/paris",
     {  templateUrl:"paris.html",
        controller:"parisCtrl"
    })
    .when("/tomato",
     {
         template:`<h1>tomato</h1>
         <p>Tomatos contain around 96% water</p>`
     }).otherwise
         {
             template:"<h3>sorry! No selection</h3>"
         }
     
});