"use strict";function stringIsTyped(s){switch(s){case 0:$("#arg-1").addClass("visible");break;case 1:$("#arg-2").addClass("visible");break;case 2:$("#arg-3").addClass("visible");var e=!0,a=!1,t=undefined;try{for(var r,d=$("#browsercontainer g.page:not(.active)")[Symbol.iterator]();!(e=(r=d.next()).done);e=!0){var n=r.value;$(n).find(".tab").first().onclick=function(s){$(s.target).toggleClass("active")},$(n).addClass("visible")}}catch(s){a=!0,t=s}finally{try{!e&&d["return"]&&d["return"]()}finally{if(a)throw t}}for(var o=0;o<4;o++)typePassword(200*o,passwords[0],o+2)}}function typePassword(s,e,a){var t=new Typed(".typed-"+a,{strings:[e],typeSpeed:40,backSpeed:17,onLastStringBackspaced:function(){5===a?fillRandomPasswords():2===a&&$("#arg-4").addClass("visible"),t.stop()},loop:!0,loopCount:2})}function fillRandomPasswords(){$("#arg-5").addClass("visible"),$("h3.manage").addClass("visible");for(var s=0;s<5;s++){new Typed(".typed-"+(s+1),{strings:passwords,typeSpeed:40,backSpeed:17,contentType:null,loop:!0,shuffle:!0,showCursor:!1})}}var passwords=["^800g9MG^100-rah$^200L7?#~eWs/KP^200","^700g9MG-rah$^200L7?#~eW^500t9DP^100","^600ivEWXtYVC$^300LJ'Pt.9=*Kjvj^200","^800}QrhM/s?Au?7f.^200ZiOxW[jA[x^300","^700xh_TcH]}4b^400n%QsG5hdvu$+m^400","^600gCuudmZJgjLp.^200g%{+8p{%xUF^100","^800ZUe}r47V/$d^100K#2g9MLXCN;5^200","^700F3Lf5'rA3X^200z=4]S[*!YSeCL!^300","^600iXCN}9vz~J_j^400a{]cNu,X't9^400","^800cJz]2'U.4~2J^200y&nQ'^}EDLy,^100","^700M9rfWuUj0?X&^200MHT:&Uz7Oh^200","^600q5.tcW4/2Cd9m^300fbHJ+/;]w^300","^800V+25b*gFVE^100H%[6tg*H&J~QDw^400","^700,Tt-'nJ3+HxI!S-qCA$uK_5o'-^100","^600EaX8q&tcyg4kD&^300=q],4Gjh^200","^800zHZ;$W=N^500tn3h=!Kenxr=a@x^300","^700q4DP73Y-=,Em7uT?z96c:N^400","^600CAR9B!p}^300X,,W{;%*eQGM,z&^100","^800Yg-p/.m!Rc*MZPAhF[z^200+@4?d^200","^700s.8fn.Vtk^100UZQ=NL[:F?u?U?^300","^600yt,&ySktJ%Xw8raU/~z_?gPeQ8^400","^800dE]k'{nc7rwa~84sn^200tb_4v}v^100","^700$qzCgZFs'$_RA^400QN[P5uA3h{2^200","^600Ln:Y3U7A^300sc3qfxtKCw'xFU-#^300","^800FcqD^100*?P3U/.qVk!b4s7v]H-p^400","^700TvqWM[$N2]U^200tj}X.&YVDv8![^100","^600-UfFNuXBAr4cj@dk$F^200Ew;]zS^200","^800QRmR}=w8$tZxY3K3]%&Hm@/^300","^700QrukY2k}FfhbK'j9EJ^200d8c3Hs^400","^600o]CAVz*sBy4SH2C5g5pv=Fx8;v^100","^800~X!]vs7#/u;j_?cFEE.NLL,8Lj^200","^700kaz5]QP^200W7nb!psumBF.z~!Cg^300","^600*L6NW6uqG62mJ9P^200R!p9^+WV{^400","^800}YU?k^200K?!/LXJm?r5'Lxha*_B^100","^700Ly,mpMkN^200gQ948c{p#BxSDt,x^200","^600_VP$D=7-H.&4d^300B'yPdcaJPV/^300","^800B?-p~;JZqHg&fFsh^200p7Q'wDmH^400","^700LD_Z43hQ4Ps'23[L@fQa^200G7Y3^100","^600_],eeL+Wja4^500SB75x2}'{QuJ^200","^800{6{t2+Cnd_d!z^200X!sMptN?m6^300","^700}6dB*q]^400k*Fv*c@ea'%F/4h.M^400","^600vs$h6M},p'7r45A^100y{CZ9gdK&^100"],typed=new Typed(".typed-1",{strings:["^500welcome1","^900welcome1^300welcome1^200welcome1^200",passwords[0]],typeSpeed:40,backSpeed:17,startDelay:600,onStringTyped:stringIsTyped,loop:!1});