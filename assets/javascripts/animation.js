"use strict";var frame=$("#animation iframe"),player=new Vimeo.Player(frame);$("#animation").on("hide.bs.modal",function(){player.pause()}),$("#animation").on("show.bs.modal",function(){player.play()}),$("a[href*=vimeo]").attr("data-target","#animation").attr("data-toggle","modal").removeAttr("href");