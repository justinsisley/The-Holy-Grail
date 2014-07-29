define(["dust"], function() {(function(){dust.register("layouts/appLayout",body_0);function body_0(chk,ctx){return chk.write("<div id=\"header-region\" class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"></div><div class=\"container-fluid\"><div class=\"row\"><div id=\"sidebar-region\" class=\"col-sm-3 col-md-2 sidebar\"></div><div id=\"main-region\" class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\"></div></div></div>");}return body_0;})();
(function(){dust.register("layouts/publicLayout",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row\"><div class=\"col-md-12\"><div class=\"jumbotron hero\"><div class=\"container\"><div id=\"navbar-region\"></div><div id=\"hero-region\"></div></div><div id=\"signin-region\"></div></div></div></div><div id=\"content-region\"></div><div id=\"footer-region\"></div>");}return body_0;})();
(function(){dust.register("widgets/myAwesomeWidget",body_0);function body_0(chk,ctx){return chk;}return body_0;})();
(function(){dust.register("modules/dashboard/dashboard",body_0);function body_0(chk,ctx){return chk.write("<h2 class=\"page-header\">Dashboard</h2><div class=\"row\" id=\"chart-dashboard-line\"></div><h3 class=\"sub-header\">Best Selling Albums of All Time</h3><div class=\"table-responsive\"><table class=\"table table-striped table-hover\"><thead><tr><th>#</th><th>Artist</th><th>Album</th><th>Year Released</th><th>Certified Sales (millions)</th></tr></thead><tbody><tr class=\"info\"><td>1</td><td>Michael Jackson</td><td>Thriller</td><td>1982</td><td>42.4</td></tr><tr class=\"success\"><td>2</td><td>Eagles</td><td>Their Greatest Hits (1971–1975)</td><td>1976</td><td>32.2</td></tr><tr class=\"danger\"><td>3</td><td>Fleetwood Mac</td><td>Rumours</td><td>1977</td><td>26.8</td></tr><tr class=\"warning\"><td>4</td><td>AC/DC</td><td>Back in Black</td><td>1980</td><td>25.9</td></tr><tr class=\"active\"><td>5</td><td>Pink Floyd</td><td>The Dark Side of the Moon</td><td>1973</td><td>22.7</td></tr></tbody></table></div><div class=\"row\"><div class=\"col-md-6\" id=\"chart-dashboard-area\"></div><div class=\"col-md-6\" id=\"chart-dashboard-pie\"></div></div>");}return body_0;})();
(function(){dust.register("modules/header/appHeader",body_0);function body_0(chk,ctx){return chk.write("<div class=\"navbar navbar-default\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"/\">Mercenary</a></div><div class=\"navbar-collapse collapse navbar-responsive-collapse\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a href=\"#\">Active</a></li><li><a href=\"#\">Link</a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li class=\"divider\"></li><li class=\"dropdown-header\">Dropdown header</li><li><a href=\"#\">Separated link</a></li><li><a href=\"#\">One more separated link</a></li></ul></li></ul><form class=\"navbar-form navbar-left\"><input type=\"text\" class=\"form-control col-lg-8\" placeholder=\"Search\"></form><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"/logout\" id=\"js-logout-link\">Logout</a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">").reference(ctx.get(["name"], false),ctx,"h").write(" <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li class=\"divider\"></li><li><a href=\"/logout\">Logout</a></li></ul></li></ul></div></div>");}return body_0;})();
(function(){dust.register("modules/footer/publicFooter",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row\"><div class=\"col-md-12\"><nav class=\"navbar navbar-default footer\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"col-md-3 pull-left\"><ul class=\"nav navbar-nav\"><li class=\"social\"><a href=\"https://github.com/justinsisley/Mercenary\" target=\"_blank\"><span class=\"fa fa-github\"></span></a></li><li class=\"social\"><a href=\"https://www.linkedin.com/in/justinsisley\" target=\"_blank\"><span class=\"fa fa-linkedin-square\"></span></a></li></ul></div><div class=\"col-md-6\"><p class=\"navbar-text\">© 2014 WTFPL – Do What the Fuck You Want to Public License &bull; <a href=\"#\">Privacy</a></p></div><div class=\"col-md-3 pull-right\"><a class=\"navbar-brand pull-right\" href=\"/\">Mercenary</a></div></div></div></nav></div></div>");}return body_0;})();
(function(){dust.register("modules/home/hero",body_0);function body_0(chk,ctx){return chk.write("<div class=\"page-header\"><div class=\"container\"><h1>The Force Multiplier Web Application Stack</h1><small class=\"center-block\">Mercenary is a feature-rich, single-page web application built using <a href=\"http://backbonejs.org/\" target=\"_blank\">Backbone</a>, <a href=\"http://marionettejs.com/\" target=\"_blank\">Marionette</a>, <a href=\"http://gruntjs.com/\" target=\"_blank\">Grunt</a>, and <a href=\"http://nodejs.org/\" target=\"_blank\">Node.js</a>.</small><small class=\"center-block\">It's a starting point, and it's a learning tool. It leverages proven, modern technologies, and it's built for speed.</small><small class=\"center-block\">Bend it to your will and <strong>make something beautiful</strong>.</small></div></div><button type=\"button\" class=\"btn btn-primary btn-lg\">Check out Mercenary on GitHub</button>");}return body_0;})();
(function(){dust.register("modules/home/home",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container features\"><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-cubes pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Backbone + Marionette</h4><span>Backbone gives Mercenary its structure, while Marionette makes it more modularized and maintainable, with built-in event-aggregation, layouts, regions, and much more.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-code pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">requirejs + Bower</h4><span>requirejs makes dependency injection, concatenation and minification a breeze. Bower manages dependencies like a boss.</span></div></div></div></div></div><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-files-o pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">LESS</h4><span>LESS is beautiful. From modularized stylesheets to variables and mixins, LESS is supercharged CSS.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-users pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Passport</h4><span>Authentication is already taken care of, so you can focus on getting users and not on writing signup and login logic.</span></div></div></div></div></div><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-bolt pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Node.js + Express</h4><span>Quick boot, no build, and blazing fast, Node.js and Express provide an awesome server-side web application architecture.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-bug pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Mocha + Chai</h4><span>Get your test on with runners in both the browser and on the command line. Write tests your way with <i>should</i>, <i>assert</i> and <i>expect</i>.</span></div></div></div></div></div><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-wrench pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Grunt</h4><span>Somebody has to do the dirty work. With pre-configured tasks ranging from concatenation to deployment to running tests, Grunt's got you covered.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-database pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">MongoDB</h4><span>Support for MongoDB is baked in, but Mercenary can configured to work with virtually any data store.</span></div></div></div></div></div></div><div class=\"container download\"><div class=\"row\"><div class=\"container\"><div class=\"col-md-1\"></div><div class=\"col-md-6 text\">Getting started with Mercenary is quick and easy. Setup takes less than 2 minutes.</div><div class=\"col-md-5\"><a href=\"https://github.com/justinsisley/Mercenary\" type=\"button\" class=\"btn btn-primary btn-lg\">Download Mercenary Now</a></div></div></div></div><div class=\"container technology\"><h3>Battle hardened<small> Proven technologies</small></h3><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-2\"><a href=\"http://backbonejs.org/\" target=\"_blank\" class=\"thumbnail\"><img src=\"/img/backbone.jpg\" alt=\"Backbone\"></a></div><div class=\"col-md-1\"><a href=\"http://marionettejs.com/\" target=\"_blank\" class=\"thumbnail\"><img src=\"/img/marionette.jpg\" width=\"40\" alt=\"Backbone Marionette\"></a></div><div class=\"col-md-2\"><a href=\"http://requirejs.org/\" target=\"_blank\" class=\"thumbnail\"><img src=\"/img/requirejs.jpg\" width=\"100\" alt=\"requirejs\"></a></div><div class=\"col-md-2\"><a href=\"http://nodejs.org/\" target=\"_blank\" class=\"thumbnail\"><img src=\"/img/nodejs.jpg\" alt=\"node.js\"></a></div><div class=\"col-md-2\"><a href=\"http://expressjs.com/\" target=\"_blank\" class=\"thumbnail\"><img src=\"/img/expressjs.jpg\" alt=\"express.js\"></a></div><div class=\"col-md-1\"><a href=\"http://gruntjs.com/\" target=\"_blank\" class=\"thumbnail\"><img src=\"/img/gruntjs.jpg\" width=\"40\" alt=\"Grunt\"></a></div><div class=\"col-md-1\"></div></div></div>");}return body_0;})();
(function(){dust.register("modules/login/hero",body_0);function body_0(chk,ctx){return chk.write("<div class=\"page-header\"><div class=\"container\"><h1>Your Dashboard Awaits</h1><small class=\"center-block\">Mercenary has a lot to offer, and these page are only its public face. Log in to view the users-only dashboard.</small><small class=\"center-block\">Want to experiment with a local copy of Mercenary? <a href=\"https://github.com/justinsisley/Mercenary\" target=\"_blank\">Download it on GitHub</a>.</small></div></div>");}return body_0;})();
(function(){dust.register("modules/login/login",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container social-login\"><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-3\"><a href=\"/auth/facebook\" class=\"btn btn-primary btn-lg btn-block btn-facebook pull-right\"><i class=\"fa fa-facebook\"></i> Log In Using Facebook</a></div><div class=\"col-md-3\"><a href=\"/auth/instagram\" class=\"btn btn-primary btn-lg btn-block btn-instagram pull-left\"><i class=\"fa fa-instagram\"></i> Log In Using Instagram</a></div><div class=\"col-md-3\"></div></div><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-3\"><a href=\"/auth/google\" class=\"btn btn-primary btn-lg btn-block btn-google pull-right\"><i class=\"fa fa-google\"></i> Log In Using Google</a></div><div class=\"col-md-3\"><a href=\"/auth/linkedin\" class=\"btn btn-primary btn-lg btn-block btn-linkedin pull-left\"><i class=\"fa fa-linkedin\"></i> Log In Using LinkedIn</a></div><div class=\"col-md-3\"></div></div><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-3\"><a href=\"/auth/twitter\" class=\"btn btn-primary btn-lg btn-block btn-twitter pull-right\"><i class=\"fa fa-twitter\"></i> Log In Using Twitter</a></div><div class=\"col-md-3\"><a href=\"/auth/github\" class=\"btn btn-primary btn-lg btn-block btn-github pull-left\"><i class=\"fa fa-github\"></i> Log In Using GitHub</a></div><div class=\"col-md-3\"></div></div></div><div class=\"container social-or-text\">or</div><div class=\"container email-login\"><div class=\"col-md-3\"></div><div class=\"col-md-6\"><div class=\"row\"><form class=\"form-inline\" action=\"/users/signin\" method=\"post\"><div class=\"form-group email-group\"><input type=\"email\" name=\"email\" class=\"form-control input-email\" placeholder=\"Email\" id=\"js-login-email\"><i class=\"glyphicon glyphicon-ok-sign validation-success\" id=\"js-email-validation-success\"></i><i class=\"glyphicon glyphicon-remove-circle validation-error\" id=\"js-email-validation-error\"></i></div><div class=\"form-group password-group\"><input type=\"password\" name=\"password\" class=\"form-control input-password\" placeholder=\"Password\" id=\"js-login-password\"></div><div class=\"form-group pull-right\"><button type=\"submit\" class=\"btn btn-success\" id=\"js-login-submit\">Log In</button></div></form></div><div class=\"alert alert-success\" role=\"alert\" id=\"js-form-success-message\"></div><div class=\"alert alert-danger\" role=\"alert\" id=\"js-form-error-message\"></div></div><div class=\"col-md-3\"></div></div>");}return body_0;})();
(function(){dust.register("modules/navbar/navbar",body_0);function body_0(chk,ctx){return chk.write("<nav class=\"navbar navbar-default primary-navigation\"><div class=\"container\"><a class=\"navbar-brand\" href=\"/\">Mercenary</a><ul class=\"nav navbar-nav navbar-right\"><li class=\"active\"><a href=\"/\" class=\"nav-link\">Home</a></li><li><a href=\"/signup\" class=\"nav-link\">Sign Up</a></li><li><a href=\"/login\" class=\"nav-link\">Log In</a></li><li class=\"social\"><a href=\"https://github.com/justinsisley/Mercenary\" target=\"_blank\"><span class=\"fa fa-github\"></span></a></li><li class=\"social\"><a href=\"https://www.linkedin.com/in/justinsisley\" target=\"_blank\"><span class=\"fa fa-linkedin-square\"></span></a></li></ul></div></nav>");}return body_0;})();
(function(){dust.register("modules/sidebar/sidebar",body_0);function body_0(chk,ctx){return chk.write("<ul class=\"nav nav-pills nav-stacked\"><li class=\"active\"><a href=\"/dashboard\">Dashboard</a></li><li class=\"disabled\"><a href=\"#\">Analytics</a></li><li class=\"disabled\"><a href=\"#\">Features</a></li><li class=\"disabled\"><a href=\"#\">Inbox</a></li><li><a href=\"/users\">Users</a></li><li class=\"disabled\"><a href=\"#\">API</a></li><li class=\"disabled\"><a href=\"#\">Profile</a></li><li class=\"disabled\"><a href=\"#\">Settings</a></li></ul>");}return body_0;})();
(function(){dust.register("modules/signup/hero",body_0);function body_0(chk,ctx){return chk.write("<div class=\"page-header\"><div class=\"container\"><h1>You're Already Using It</h1><small class=\"center-block\">Mercenary has a lot to offer, and this website is only its public face. Sign up and log in to try out the users-only dashboard.</small><small class=\"center-block\">Authentication is baked-in using Passport, so go ahead, create an account and give it a test drive.</small></div></div>");}return body_0;})();
(function(){dust.register("modules/signup/signup",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container social-signup\"><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-3\"><a href=\"/auth/facebook\" class=\"btn btn-primary btn-lg btn-block btn-facebook pull-right\"><i class=\"fa fa-facebook\"></i> Sign Up Using Facebook</a></div><div class=\"col-md-3\"><a href=\"/auth/instagram\" class=\"btn btn-primary btn-lg btn-block btn-instagram pull-left\"><i class=\"fa fa-instagram\"></i> Sign Up Using Instagram</a></div><div class=\"col-md-3\"></div></div><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-3\"><a href=\"/auth/google\" class=\"btn btn-primary btn-lg btn-block btn-google pull-right\"><i class=\"fa fa-google\"></i> Sign Up Using Google</a></div><div class=\"col-md-3\"><a href=\"/auth/linkedin\" class=\"btn btn-primary btn-lg btn-block btn-linkedin pull-left\"><i class=\"fa fa-linkedin\"></i> Sign Up Using LinkedIn</a></div><div class=\"col-md-3\"></div></div><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-3\"><a href=\"/auth/twitter\" class=\"btn btn-primary btn-lg btn-block btn-twitter pull-right\"><i class=\"fa fa-twitter\"></i> Sign Up Using Twitter</a></div><div class=\"col-md-3\"><a href=\"/auth/github\" class=\"btn btn-primary btn-lg btn-block btn-github pull-left\"><i class=\"fa fa-github\"></i> Sign Up Using GitHub</a></div><div class=\"col-md-3\"></div></div></div><div class=\"container social-or-text\">or</div><div class=\"container email-signup\"><div class=\"col-md-3\"></div><div class=\"col-md-6\"><div class=\"row\"><div class=\"form-inline\" id=\"js-signup-form\"><div class=\"form-group email-group\"><input type=\"email\" class=\"form-control input-email\" placeholder=\"Email\" id=\"js-signup-email\"><i class=\"glyphicon glyphicon-ok-sign validation-success\" id=\"js-email-validation-success\"></i><i class=\"glyphicon glyphicon-remove-circle validation-error\" id=\"js-email-validation-error\"></i></div><div class=\"form-group password-group\"><input type=\"password\" class=\"form-control input-password\" placeholder=\"Password\" id=\"js-signup-password\"></div><div class=\"form-group pull-right\"><button type=\"submit\" class=\"btn btn-success\" id=\"js-signup-submit\">Sign Up</button></div></div></div><div class=\"alert alert-success\" role=\"alert\" id=\"js-form-success-message\"></div><div class=\"alert alert-danger\" role=\"alert\" id=\"js-form-error-message\"></div></div><div class=\"col-md-3\"></div></div>");}return body_0;})();
(function(){dust.register("modules/users/users",body_0);function body_0(chk,ctx){return chk.write("<h2 class=\"page-header\">Users</h2><table class=\"table table-hover\"><tbody><tr><td class=\"col-md-1\"><img src=\"http://api.randomuser.me/portraits/men/49.jpg\" alt=\"Scott Stevens\" class=\"img-responsive img-circle\" /></td><td>Scott Stevens</td><td>Column content</td></tr><tr><td class=\"col-md-1\"><img src=\"http://api.randomuser.me/portraits/men/97.jpg\" alt=\"Seth Frazier\" class=\"img-responsive img-circle\" /></td><td>Seth Frazier</td><td>Column content</td></tr><tr><td class=\"col-md-1\"><img src=\"http://api.randomuser.me/portraits/women/90.jpg\" alt=\"Jean Myers\" class=\"img-responsive img-circle\" /></td><td>Jean Myers</td><td>Column content</td></tr><tr><td class=\"col-md-1\"><img src=\"http://api.randomuser.me/portraits/men/24.jpg\" alt=\"Todd Shelton\" class=\"img-responsive img-circle\" /></td><td>Todd Shelton</td><td>Column content</td></tr><tr><td class=\"col-md-1\"><img src=\"http://api.randomuser.me/portraits/women/34.jpg\" alt=\"Rosemary Porter\" class=\"img-responsive img-circle\" /></td><td>Rosemary Porter</td><td>Column content</td></tr><tr><td class=\"col-md-1\"><img src=\"http://api.randomuser.me/portraits/women/56.jpg\" alt=\"Debbie Schmidt\" class=\"img-responsive img-circle\" /></td><td>Debbie Schmidt</td><td>Column content</td></tr><tr><td class=\"col-md-1\"><img src=\"http://api.randomuser.me/portraits/women/76.jpg\" alt=\"Glenda Patterson\" class=\"img-responsive img-circle\" /></td><td>Glenda Patterson</td><td>Column content</td></tr></tbody></table> <ul class=\"pagination\"><li class=\"disabled\"><a href=\"#\">«</a></li><li class=\"active\"><a href=\"#\">1</a></li><li><a href=\"#\">2</a></li><li><a href=\"#\">3</a></li><li><a href=\"#\">4</a></li><li><a href=\"#\">5</a></li><li><a href=\"#\">»</a></li></ul>");}return body_0;})();});