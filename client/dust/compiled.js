define(["dust"], function() {(function(){dust.register("widgets/myAwesomeWidget",body_0);function body_0(chk,ctx){return chk;}return body_0;})();
(function(){dust.register("modules/dashboard/mainItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row\"><div class=\"col-md-12\"><h1>Dashboard</h1></div></div><div class=\"row\"><div class=\"col-md-6 map\" id=\"map\"></div></div><div class=\"row\"><div class=\"col-md-6 section-title\" id=\"combo-chart\"></div><div class=\"col-md-6 section-title\" id=\"scatter-chart\"></div></div><div class=\"row\"><div class=\"col-md-12\" id=\"line-chart\"></div></div>");}return body_0;})();
(function(){dust.register("modules/footer/mainItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row\"><div class=\"col-md-12\"><nav class=\"navbar navbar-default footer\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"col-md-3 pull-left\"><ul class=\"nav navbar-nav\"><li class=\"social\"><a href=\"https://github.com/justinsisley/Mercenary\" target=\"_blank\"><span class=\"fa fa-github\"></span></a></li><li class=\"social\"><a href=\"https://www.linkedin.com/in/justinsisley\" target=\"_blank\"><span class=\"fa fa-linkedin-square\"></span></a></li></ul></div><div class=\"col-md-6\"><p class=\"navbar-text\">2014 &bull; <a href=\"http://www.wtfpl.net/\">WTFPL</a> &bull; <a href=\"#\">Privacy</a></p></div><div class=\"col-md-3 pull-right\"><a class=\"navbar-brand pull-right\" href=\"/\">Mercenary</a></div></div></div></nav></div></div>");}return body_0;})();
(function(){dust.register("modules/header/mainItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container-fluid\"><ul class=\"nav navbar-nav\"><li><button type=\"button\" class=\"btn btn-default btn-sidebar-toggle\"><i class=\"fa fa-bars\"></i></button></li></ul><form class=\"navbar-form navbar-left form-search\" role=\"search\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search...\"></div></form><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"/help\">Help</a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">").exists(ctx.getPath(false, ["profile","name"]),ctx,{"else":body_1,"block":body_2},{}).write(" <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"><li><a href=\"/account\">Account</a></li><li><a href=\"/settings\">Settings</a></li><li class=\"divider\"></li><li><a href=\"/logout\">Log Out</a></li></ul></li></ul></div>");}function body_1(chk,ctx){return chk.reference(ctx.get(["email"], false),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false, ["profile","name"]),ctx,"h");}return body_0;})();
(function(){dust.register("modules/home/heroItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"page-header\"><div class=\"container\"><h1>The Force Multiplier Web Application Stack</h1><small class=\"center-block\">Mercenary is a feature-rich, single-page web application built using <a href=\"http://backbonejs.org/\" target=\"_blank\">Backbone</a>, <a href=\"http://marionettejs.com/\" target=\"_blank\">Marionette</a>, <a href=\"http://gruntjs.com/\" target=\"_blank\">Grunt</a>, and <a href=\"http://nodejs.org/\" target=\"_blank\">Node.js</a>.</small><small class=\"center-block\">It's a starting point, and it's a learning tool. It leverages proven, modern technologies, and it's built for speed.</small><small class=\"center-block\">Bend it to your will and <strong>make something beautiful</strong>.</small></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 col-md-offset-4\"><a href=\"https://github.com/justinsisley/Mercenary\" class=\"btn btn-primary btn-lg\" target=\"_self\">Check out Mercenary on GitHub</a></div></div></div>");}return body_0;})();
(function(){dust.register("modules/home/mainItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container features\"><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-cubes pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Backbone + Marionette</h4><span>Backbone gives Mercenary its structure, while Marionette makes it more modularized and maintainable, with built-in event-aggregation, layouts, regions, and much more.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-code pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">requirejs + Bower</h4><span>requirejs makes dependency injection, concatenation and minification a breeze. Bower manages dependencies like a boss.</span></div></div></div></div></div><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-files-o pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">LESS</h4><span>LESS is beautiful. From modularized stylesheets to variables and mixins, LESS is supercharged CSS.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-users pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Passport</h4><span>Authentication is already taken care of, so you can focus on getting users and not on writing signup and login logic.</span></div></div></div></div></div><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-bolt pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Node.js + Express</h4><span>Quick boot, no build, and blazing fast, Node.js and Express provide an awesome server-side web application architecture.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-bug pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Mocha + Chai</h4><span>Get your test on with runners in both the browser and on the command line. Write tests your way with <i>should</i>, <i>assert</i> and <i>expect</i>.</span></div></div></div></div></div><div class=\"row\"><div class=\"container\"><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-wrench pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">Gulp</h4><span>Somebody has to do the dirty work. With pre-configured tasks ranging from concatenation to deployment to running tests, Gulp's got you covered.</span></div></div></div><div class=\"col-md-6\"><div class=\"media\"><i class=\"media-object fa fa-database pull-left\"></i><div class=\"media-body\"><h4 class=\"media-heading\">MongoDB</h4><span>Support for MongoDB is baked in, but Mercenary can be configured to work with virtually any data store.</span></div></div></div></div></div></div><div class=\"container download\"><div class=\"row\"><div class=\"container\"><div class=\"col-md-1\"></div><div class=\"col-md-6 text\">Getting started with Mercenary is quick and easy. Setup takes less than 2 minutes.</div><div class=\"col-md-5\"><a href=\"https://github.com/justinsisley/Mercenary\" class=\"btn btn-primary btn-lg\" target=\"_self\">Download Mercenary Now</a></div></div></div></div><div class=\"container technology\"><h3>Battle hardened<small> Proven technologies</small></h3><div class=\"row\"><div class=\"col-md-2 col-md-offset-1\"><a href=\"http://backbonejs.org/\" target=\"_blank\" class=\"thumbnail\"><img src=\"http://cdn.mercenary.io/img/backbone.jpg\" alt=\"Backbone\"></a></div><div class=\"col-md-1\"><a href=\"http://marionettejs.com/\" target=\"_blank\" class=\"thumbnail\"><img src=\"http://cdn.mercenary.io/img/marionette.jpg\" width=\"40\" alt=\"Backbone Marionette\"></a></div><div class=\"col-md-2\"><a href=\"http://requirejs.org/\" target=\"_blank\" class=\"thumbnail\"><img src=\"http://cdn.mercenary.io/img/requirejs.jpg\" width=\"100\" alt=\"requirejs\"></a></div><div class=\"col-md-1\"><a href=\"http://gulpjs.com/\" target=\"_blank\" class=\"thumbnail\"><img src=\"http://cdn.mercenary.io/img/gulpjs.jpg\" width=\"40\" alt=\"Grunt\"></a></div><div class=\"col-md-2\"><a href=\"http://nodejs.org/\" target=\"_blank\" class=\"thumbnail\"><img src=\"http://cdn.mercenary.io/img/nodejs.jpg\" alt=\"node.js\"></a></div><div class=\"col-md-2\"><a href=\"http://expressjs.com/\" target=\"_blank\" class=\"thumbnail\"><img src=\"http://cdn.mercenary.io/img/expressjs.jpg\" alt=\"express.js\"></a></div></div></div>");}return body_0;})();
(function(){dust.register("modules/login/heroItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"page-header\"><div class=\"container\"><h1>Your Dashboard Awaits</h1><small class=\"center-block\">Mercenary has a lot to offer, and these page are only its public face. Log in to view the users-only dashboard.</small><small class=\"center-block\">Want to experiment with a local copy of Mercenary? <a href=\"https://github.com/justinsisley/Mercenary\" target=\"_blank\">Download it on GitHub</a>.</small><small class=\"center-block account-help\"><a href=\"/login/password/reset\" class=\"account-help-link\">Forgot your password?</a><a href=\"/login/activation/resend\" class=\"account-help-link\">Can't find your activation email?</a></small></div></div>");}return body_0;})();
(function(){dust.register("modules/login/mainItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container social-login\"><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/facebook\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-facebook\"></i> Log In Using Facebook</a></div><div class=\"col-md-3\"><a href=\"/auth/instagram\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-instagram\"></i> Log In Using Instagram</a></div></div><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/google\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-google\"></i> Log In Using Google</a></div><div class=\"col-md-3\"><a href=\"/auth/linkedin\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-linkedin\"></i> Log In Using LinkedIn</a></div></div><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/twitter\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-twitter\"></i> Log In Using Twitter</a></div><div class=\"col-md-3\"><a href=\"/auth/github\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-github\"></i> Log In Using GitHub</a></div></div><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/soundcloud\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-soundcloud\"></i> Log In Using SoundCloud</a></div><div class=\"col-md-3\"><a href=\"/auth/dropbox\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-dropbox\"></i> Log In Using DropBox</a></div></div></div><div class=\"container social-or-text\">or</div><div class=\"container email-login\"><div class=\"col-md-6 col-md-offset-3\"><div class=\"row\"><form class=\"form-inline\" action=\"/users/signin\" method=\"post\"><div class=\"form-group email-group\"><input type=\"email\" name=\"email\" class=\"form-control input-email\" placeholder=\"Email\" id=\"js-login-email\"><i class=\"glyphicon glyphicon-ok-sign validation-success\" id=\"js-email-validation-success\"></i><i class=\"glyphicon glyphicon-remove-circle validation-error\" id=\"js-email-validation-error\"></i></div><div class=\"form-group password-group\"><input type=\"password\" name=\"password\" class=\"form-control input-password\" placeholder=\"Password\" id=\"js-login-password\"></div><div class=\"form-group pull-right\"><button type=\"submit\" class=\"btn btn-success\" id=\"js-login-submit\">Log In</button></div></form></div><div class=\"alert alert-success\" role=\"alert\" id=\"js-form-success-message\"></div><div class=\"alert alert-danger\" role=\"alert\" id=\"js-form-error-message\"></div></div></div>");}return body_0;})();
(function(){dust.register("modules/navbar/mainItem",body_0);function body_0(chk,ctx){return chk.write("<nav class=\"navbar navbar-default primary-navigation\"><div class=\"container\"><a class=\"navbar-brand\" href=\"/\">Mercenary</a><ul class=\"nav navbar-nav navbar-right\"><li class=\"active\"><a href=\"/\" class=\"nav-link\">Home</a></li><li><a href=\"/signup\" class=\"nav-link\">Sign Up</a></li><li><a href=\"/login\" class=\"nav-link\">Log In</a></li><li class=\"social\"><a href=\"https://github.com/justinsisley/Mercenary\" target=\"_blank\"><span class=\"fa fa-github\"></span></a></li><li class=\"social\"><a href=\"https://www.linkedin.com/in/justinsisley\" target=\"_blank\"><span class=\"fa fa-linkedin-square\"></span></a></li></ul></div></nav>");}return body_0;})();
(function(){dust.register("modules/signup/heroItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"page-header\"><div class=\"container\"><h1>You're Already Using It</h1><small class=\"center-block\">Mercenary has a lot to offer, and this website is only its public face. Sign up and log in to try out the users-only dashboard.</small><small class=\"center-block\">Authentication is baked-in using Passport, so go ahead, create an account and give it a test drive.</small></div></div>");}return body_0;})();
(function(){dust.register("modules/signup/mainItem",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container social-signup\"><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/facebook\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-facebook\"></i> Sign Up With Facebook</a></div><div class=\"col-md-3\"><a href=\"/auth/instagram\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-instagram\"></i> Sign Up With Instagram</a></div></div><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/google\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-google\"></i> Sign Up With Google</a></div><div class=\"col-md-3\"><a href=\"/auth/linkedin\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-linkedin\"></i> Sign Up With LinkedIn</a></div></div><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/twitter\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-twitter\"></i> Sign Up With Twitter</a></div><div class=\"col-md-3\"><a href=\"/auth/github\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-github\"></i> Sign Up With GitHub</a></div></div><div class=\"row\"><div class=\"col-md-3 col-md-offset-3\"><a href=\"/auth/soundcloud\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-right\" target=\"_self\"><i class=\"fa fa-soundcloud\"></i> Sign Up With SoundCloud</a></div><div class=\"col-md-3\"><a href=\"/auth/dropbox\" class=\"btn btn-primary btn-lg btn-block btn-provider pull-left\" target=\"_self\"><i class=\"fa fa-dropbox\"></i> Sign Up With DropBox</a></div></div></div><div class=\"container social-or-text\">or</div><div class=\"container email-signup\"><div class=\"col-md-6 col-md-offset-3\"><div class=\"row\"><div class=\"form-inline\" id=\"js-signup-form\"><div class=\"form-group email-group\"><input type=\"email\" class=\"form-control input-email\" placeholder=\"Email\" id=\"js-signup-email\"><i class=\"glyphicon glyphicon-ok-sign validation-success\" id=\"js-email-validation-success\"></i><i class=\"glyphicon glyphicon-remove-circle validation-error\" id=\"js-email-validation-error\"></i></div><div class=\"form-group password-group\"><input type=\"password\" class=\"form-control input-password\" placeholder=\"Password\" id=\"js-signup-password\"></div><div class=\"form-group pull-right\"><button type=\"submit\" class=\"btn btn-success\" id=\"js-signup-submit\">Sign Up</button></div></div></div><div class=\"alert alert-success\" role=\"alert\" id=\"js-form-success-message\"></div><div class=\"alert alert-danger\" role=\"alert\" id=\"js-form-error-message\"></div></div></div>");}return body_0;})();
(function(){dust.register("modules/sidebar/mainItem",body_0);function body_0(chk,ctx){return chk.write("<ul class=\"sidebar-nav\"><li class=\"sidebar-brand\"><a href=\"/dashboard.html\" class=\"brand-standard\">Mercenary</a><a href=\"/dashboard.html\" class=\"brand-collapsed\">M</a></li><li class=\"title\">Sections</li><li class=\"active\"><a href=\"/dashboard.html\" data-toggle=\"tooltip\" title=\"Dashboard\"><i class=\"fa fa-dashboard\"></i> <span>Dashboard</span></a></li><li><a href=\"/blank.html\" data-toggle=\"tooltip\" title=\"Browse\"><i class=\"fa fa-th-large\"></i> <span>Browse</span></a></li><li><a href=\"/blank.html\" data-toggle=\"tooltip\" title=\"Events\"><i class=\"fa fa-calendar\"></i> <span>Events</span></a></li><li><a href=\"/blank.html\" data-toggle=\"tooltip\" title=\"Users\"><i class=\"fa fa-users\"></i> <span>Users</span></a></li><li class=\"separator\"></li><li class=\"title\">Features</li><li><a href=\"/blank.html\" data-toggle=\"tooltip\" title=\"Features\"><i class=\"fa fa-sort-alpha-asc\"></i> <span>Features</span></a></li><li><a href=\"/blank.html\" data-toggle=\"tooltip\" title=\"API\"><i class=\"fa fa-exchange\"></i> <span>API</span></a></li></ul>");}return body_0;})();
(function(){dust.register("shared/layouts/appLayout",body_0);function body_0(chk,ctx){return chk.write("<div class=\"wrapper\"><div class=\"sidebar-wrapper\" id=\"sidebar-region\"></div><div class=\"page-content-wrapper\"><nav class=\"navbar navbar-default page-content-header\" role=\"navigation\" id=\"header-region\"></nav><div class=\"page-content\" id=\"main-region\"></div></div></div>");}return body_0;})();
(function(){dust.register("shared/layouts/publicLayout",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row\"><div class=\"col-md-12\"><div class=\"jumbotron hero\"><div class=\"container\"><div id=\"navbar-region\"></div><div id=\"hero-region\"></div></div><div id=\"signin-region\"></div></div></div></div><div id=\"content-region\"></div><div id=\"footer-region\"></div>");}return body_0;})();});