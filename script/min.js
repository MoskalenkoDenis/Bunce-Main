/*! BunceMain - v0.1.0 - 2015-07-09 */$(function(){function a(){var a=$(".resize"),b=0;b=$(a).width()/$(window).width();var c=$(window).width(),d=$(a).height()/b;$(a).css("width",c),$(a).css("height",d)}a(),$(window).on("resize",function(){a()})});