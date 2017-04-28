/**
 * Created by Administrator on 2017/3/25.
 */

angular.module("SC-Login", ["ngRoute","controller","service"])

    .config(function ($routeProvider) {

        $routeProvider
            .when('/',{
                templateUrl:public_path+'/home/js/template/login-login.html',
                controller:"login"
            })
            .when('/login', {
                templateUrl: public_path+'/home/js/template/login-login.html',
                controller:'login'
            })
            .when("/user",{
                templateUrl:public_path+"/home/js/template/user.html",
                controller:"user"
            })
            .when("/email",{
                templateUrl:public_path+"/home/js/template/login-email.html",
                controller:"email"
            })
            .otherwise({redirectTo:'/'});
    })

