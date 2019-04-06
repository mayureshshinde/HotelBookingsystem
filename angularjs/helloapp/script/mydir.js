

app.directive('myDirective',function(){
    return{
        //restrict:"C",
        restrict:"M",
        replace:false,
         template:"<h1>this is angularjs user-defined directive</h1>"
    }
}  );