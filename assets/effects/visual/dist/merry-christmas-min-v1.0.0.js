const merryChristmasEffect = {
name: "Merry Christmas",
description: "Bring the magic of winter to your website with this beautiful Christmas cinematic effect. Features mesmerizing Northern Lights, layered snowfall, shooting stars, and a softly glowing holiday portal.",
author: "Md Mim Akhtar",
type: "visual",
icon: "❄️",
thumbnail: "https://cdn.jsdelivr.net/gh/iMiMofficial/Seazonify@main/assets/effects/visual/thumbnails/merry-christmas.webp",
license: "https://seazonify.com/license",
version: "1.0.0",
created: "16-03-2026",
category: "celebration",
tags: ["christmas", "winter", "snow", "aurora", "magical", "holiday", "portal"],
css: `@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;700&family=Great+Vibes&display=swap');.szfy-mc-root{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:999999;overflow:hidden;background:transparent;font-family:'Montserrat',sans-serif;}.szfy-mc-portal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#000B1A;z-index:1000000;display:flex;align-items:center;justify-content:center;transition:opacity 2s ease-in-out,visibility 2s;visibility:visible;}.szfy-mc-portal-overlay.szfy-fade-out{opacity:0;visibility:hidden;pointer-events:none;}.szfy-mc-portal-overlay.szfy-screensaver-active{opacity:1;visibility:visible;pointer-events:auto;}.szfy-mc-aurora{position:fixed;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at 50% 50%,rgba(46,204,113,0.08) 0%,transparent 40%),radial-gradient(circle at 20% 40%,rgba(52,152,219,0.1) 0%,transparent 50%),radial-gradient(circle at 80% 60%,rgba(155,89,182,0.08) 0%,transparent 50%);filter:blur(60px);opacity:0;animation:szfy-mc-aurora-swirl 30s infinite alternate ease-in-out,szfy-mc-fade-in 4s 1s forwards;pointer-events:none;z-index:999998;transition:opacity 3s ease;transform:translateZ(0);}.szfy-mc-aurora.szfy-lingering{opacity:0.6;}@keyframes szfy-mc-aurora-swirl{0%{transform:rotate(0deg) scale(1) translateZ(0);}50%{transform:rotate(10deg) scale(1.1) translateZ(0);}100%{transform:rotate(-5deg) scale(0.9) translateZ(0);}}.szfy-mc-center-glow{position:absolute;width:400px;height:400px;background:radial-gradient(circle,rgba(255,255,255,0.15) 0%,rgba(135,206,235,0.05) 40%,transparent 70%);border-radius:50%;opacity:0;animation:szfy-mc-fade-in 3s 1.5s forwards,szfy-mc-pulse-glow 4s infinite alternate ease-in-out;transform:translateZ(0);}@keyframes szfy-mc-pulse-glow{0%{transform:scale(0.8) translateZ(0);opacity:0.5;}100%{transform:scale(1.2) translateZ(0);opacity:1;}}.szfy-mc-portal-star{position:absolute;width:200px;height:200px;opacity:0;transform:scale(0) rotate(-45deg) translateZ(0);animation:szfy-mc-star-enter 5s 1s cubic-bezier(0.165,0.84,0.44,1) forwards;pointer-events:none;}@keyframes szfy-mc-star-enter{0%{transform:scale(0) rotate(-45deg) translateZ(0);opacity:0;}40%{opacity:0.15;}100%{transform:scale(1.5) rotate(90deg) translateZ(0);opacity:0;}}.szfy-mc-bottom-ground{position:absolute;bottom:0;left:0;width:100%;height:35vh;background:linear-gradient(to top,rgba(200,230,255,0.1),transparent);z-index:1000000;pointer-events:none;opacity:0;animation:szfy-mc-fade-in 4s 0s forwards;}.szfy-mc-holy-rays{position:absolute;top:50%;left:50%;width:40vmax;height:40vmax;background:repeating-conic-gradient( from 0deg,rgba(255,255,255,0.05) 0deg 8deg,transparent 8deg 24deg );-webkit-mask-image:radial-gradient(circle,black 20%,transparent 60%);mask-image:radial-gradient(circle,black 20%,transparent 60%);border-radius:50%;animation:szfy-mc-spin-rays 60s linear infinite,szfy-mc-fade-in 4s 2s forwards;pointer-events:none;will-change:transform,opacity;opacity:0;}@keyframes szfy-mc-spin-rays{0%{transform:translate(-50%,-50%) rotate(0deg) scale(3) translateZ(0);}100%{transform:translate(-50%,-50%) rotate(360deg) scale(3) translateZ(0);}}.szfy-mc-top-decor{position:absolute;top:0;left:0;width:100%;height:35vh;pointer-events:none;z-index:1000002;}.szfy-mc-star-curtain{position:absolute;top:0;left:0;width:100%;height:35vh;pointer-events:none;z-index:1000002;}.szfy-mc-star-drop{position:absolute;top:0;width:clamp(40px,6vw,90px);transform-origin:top center;}.szfy-mc-star-wire{position:absolute;top:0;left:50%;transform:translateX(-50%);width:1px;height:100%;background:rgba(255,255,255,0.5);}.szfy-mc-wire-led{position:absolute;left:50%;transform:translateX(-50%);width:3px;height:3px;border-radius:50%;background:#ffffff;box-shadow:0 0 2px 1px #fff,0 0 6px 3px #ffaa00,0 0 12px 5px rgba(255,140,0,0.6);animation:szfy-mc-star-twinkle 1.5s alternate infinite ease-in-out;}.szfy-mc-hanging-star{position:absolute;bottom:calc(clamp(40px,6vw,90px) * -0.9);left:50%;transform:translateX(-50%);width:100%;height:clamp(40px,6vw,90px);display:flex;justify-content:center;align-items:center;}.szfy-mc-hanging-star svg{position:absolute;width:100%;height:100%;filter:drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,240,200,0.6));}@keyframes szfy-mc-star-sway{0%{transform:rotate(-3deg);}100%{transform:rotate(3deg);}}@keyframes szfy-mc-star-twinkle{0%,20%{background:#ffe6cc;box-shadow:0 0 1px rgba(255,255,255,0.5);opacity:0.8;transform:translateX(-50%);}50%,80%{background:#ffffff;box-shadow:0 0 4px 2px #ffffff,0 0 10px 5px #ffb300,0 0 20px 8px rgba(255,120,0,0.5);opacity:1;transform:translateX(-50%);}100%{background:#ffe6cc;box-shadow:0 0 1px rgba(255,255,255,0.5);opacity:0.8;transform:translateX(-50%);}}.szfy-mc-css-tree{position:absolute;bottom:-8vh;width:clamp(200px,30vw,450px);height:clamp(300px,45vw,650px);z-index:1000001;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;pointer-events:none;filter:drop-shadow(0 15px 15px rgba(0,0,0,0.8));transform-origin:bottom center;opacity:0;}.szfy-mc-css-tree.left{left:2vw;animation:szfy-mc-tree-grow-l 3s 0.3s cubic-bezier(0.175,0.885,0.32,1.275) forwards,szfy-mc-tree-sway-l 8s ease-in-out infinite alternate 3.3s;}.szfy-mc-css-tree.right{right:2vw;animation:szfy-mc-tree-grow-r 3.5s 0.6s cubic-bezier(0.175,0.885,0.32,1.275) forwards,szfy-mc-tree-sway-r 7.5s ease-in-out infinite alternate 4.1s;}.szfy-mc-tree-img{position:absolute;bottom:0px;left:0%;width:100%;height:100%;background-image:url('https://cdn.jsdelivr.net/gh/iMiMofficial/Seazonify@main/assets/effects/visual/assets/img/asset-1773576362851.webp');background-size:contain;background-position:bottom center;background-repeat:no-repeat;z-index:1;}.szfy-mc-fl{position:absolute;width:2.5%;padding-bottom:2.5%;border-radius:50%;z-index:13;animation:szfy-mc-fl-blink 1.5s alternate infinite ease-in-out;box-shadow:inset -1px -1px 2px rgba(0,0,0,0.5);}.szfy-mc-fl.fl-w{background:#ffffff;box-shadow:0 0 10px 3px rgba(255,255,255,0.9);}.szfy-mc-fl.fl-y{background:#ffea00;box-shadow:0 0 10px 3px rgba(255,234,0,0.9);}.szfy-mc-fl.fl-r{background:#ff3333;box-shadow:0 0 10px 3px rgba(255,51,51,0.9);}.szfy-mc-fl.fl-g{background:#33ff33;box-shadow:0 0 10px 3px rgba(51,255,51,0.9);}.szfy-mc-fl.fl-b{background:#33ccff;box-shadow:0 0 10px 3px rgba(51,204,255,0.9);}@keyframes szfy-mc-fl-blink{0%{opacity:0.3;transform:scale(0.6);filter:brightness(0.5);}100%{opacity:1.0;transform:scale(1.3);filter:brightness(1.2);}}width:16%;padding-bottom:16%;background:radial-gradient(circle,#fff,#ffd700 40%,#b8860b 90%);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);z-index:15;filter:drop-shadow(0 0 10px rgba(255,215,0,0.8));animation:szfy-mc-fl-blink 2s alternate infinite ease-in-out;}.szfy-mc-gifts-wrapper{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);width:90%;height:12%;z-index:12;display:flex;justify-content:center;align-items:flex-end;gap:2%;}.szfy-mc-gift{position:relative;border-radius:2px;box-shadow:2px 2px 5px rgba(0,0,0,0.6),inset 2px 2px 5px rgba(255,255,255,0.3);}.szfy-mc-gift.g1{width:22%;height:80%;background:radial-gradient(circle at top left,#ff5e50,#c0392b);}.szfy-mc-gift.g2{width:16%;height:60%;background:radial-gradient(circle at top left,#af7ac4,#8e44ad);}.szfy-mc-gift.g3{width:26%;height:50%;background:radial-gradient(circle at top left,#f5b041,#d68910);}.szfy-mc-gift.g4{width:24%;height:75%;background:radial-gradient(circle at top left,#58d68d,#27ae60);}.szfy-mc-ribbon-v{position:absolute;left:50%;top:0;transform:translateX(-50%);width:15%;height:100%;background:rgba(255,255,255,0.8);}.szfy-mc-gift.g3 .szfy-mc-ribbon-v{background:#c0392b;}.szfy-mc-gift.g4 .szfy-mc-ribbon-v{background:#e74c3c;}.szfy-mc-ribbon-h{position:absolute;top:50%;left:0;transform:translateY(-50%);height:15%;width:100%;background:rgba(255,255,255,0.8);}.szfy-mc-gift.g3 .szfy-mc-ribbon-h{background:#c0392b;}.szfy-mc-gift.g4 .szfy-mc-ribbon-h{background:#e74c3c;}.szfy-mc-bow{position:absolute;top:-15%;left:50%;transform:translateX(-50%);width:40%;height:30%;background:radial-gradient(ellipse,transparent 30%,rgba(255,255,255,0.8) 35%);border-radius:50%;}.szfy-mc-gift.g3 .szfy-mc-bow{background:radial-gradient(ellipse,transparent 30%,#c0392b 35%);}.szfy-mc-gift.g4 .szfy-mc-bow{background:radial-gradient(ellipse,transparent 30%,#e74c3c 35%);}@keyframes szfy-mc-tree-grow-l{0%{transform:scale(0.1) translateY(200px) rotate(-5deg);opacity:0;}100%{transform:scale(1) translateY(0) rotate(0deg);opacity:1;}}@keyframes szfy-mc-tree-grow-r{0%{transform:scaleX(-1) scaleY(0.1) translateY(200px) rotate(-5deg);opacity:0;}100%{transform:scaleX(-1) scaleY(1) translateY(0) rotate(0deg);opacity:1;}}@keyframes szfy-mc-tree-sway-l{0%{transform:scale(1) rotate(-1deg);opacity:1;}100%{transform:scale(1) rotate(1.5deg);opacity:1;}}@keyframes szfy-mc-tree-sway-r{0%{transform:scaleX(-1) scaleY(1) rotate(-1.5deg);opacity:1;}100%{transform:scaleX(-1) scaleY(1) rotate(2deg);opacity:1;}}.szfy-mc-css-tree.left-small,.szfy-mc-css-tree.right-small{display:none;}@media (min-width:1600px){.szfy-mc-css-tree.left-small,.szfy-mc-css-tree.right-small{display:flex;}}.szfy-mc-halo-ring{position:absolute;top:50%;left:50%;width:25vmax;height:25vmax;min-width:300px;min-height:300px;border:1px solid rgba(255,215,0,0.15);border-radius:50%;box-sizing:border-box;box-shadow:0 0 30px rgba(255,215,0,0.05),inset 0 0 20px rgba(255,215,0,0.05);border-top:1px solid rgba(255,255,255,0.4);border-bottom:1px solid rgba(135,206,235,0.4);opacity:0;animation:szfy-mc-spin-rays 30s linear infinite reverse,szfy-mc-star-enter 4s 1s forwards;pointer-events:none;will-change:transform,opacity;}.szfy-mc-halo-ring::before{content:'';position:absolute;top:-5%;left:-5%;width:110%;height:110%;border-radius:50%;border:1px dashed rgba(255,255,255,0.2);animation:szfy-mc-spin-rays 45s linear infinite;}.szfy-mc-frost-frame{position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:inset 0 0 10vmax rgba(0,0,0,0.8),inset 0 0 3vmax rgba(255,255,255,0.1);pointer-events:none;z-index:1000000;opacity:0;animation:szfy-mc-fade-in 4s 0.5s forwards;}.szfy-mc-bottom-ground{position:absolute;bottom:0;left:0;width:100%;height:35vh;background:linear-gradient(to top,rgba(135,206,235,0.15),transparent);z-index:1000000;pointer-events:none;opacity:0;animation:szfy-mc-fade-in 4s 0s forwards;}.szfy-mc-snowdrifts{position:absolute;bottom:-5px;left:0;width:100%;height:15vh;background-image:radial-gradient(150% 100% at 20% 110%,rgba(255,255,255,0.08) 40%,transparent 41%),radial-gradient(120% 100% at 80% 110%,rgba(255,255,255,0.05) 45%,transparent 46%);background-size:100% 100%;background-repeat:no-repeat;pointer-events:none;}.szfy-mc-proclamation{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:1000001;width:95vw;max-width:1000px;line-height:1.1;pointer-events:none;}.szfy-mc-greeting-cursive{font-family:'Great Vibes',cursive;font-size:clamp(3rem,8vw,7rem);color:#FFF;text-shadow:0 0 20px rgba(255,255,255,0.5),0 0 10px rgba(135,206,235,0.8);opacity:0;margin:0;padding:0;transform:translateY(20px);animation:szfy-mc-slide-up 2.5s 1.5s cubic-bezier(0.165,0.84,0.44,1) forwards;}.szfy-mc-subtext{font-family:'Montserrat',sans-serif;font-size:clamp(1rem,2vw,2rem);color:#B0E0E6;font-weight:300;margin-top:10px;opacity:0;letter-spacing:0.4em;text-transform:uppercase;animation:szfy-mc-fade-in-slide 2.5s 2s forwards;text-shadow:0 2px 5px rgba(0,0,0,0.8);}@keyframes szfy-mc-slide-up{to{opacity:1;transform:translateY(0);}}@keyframes szfy-mc-fade-in{to{opacity:1;}}@keyframes szfy-mc-fade-in-slide{to{opacity:1;transform:translateY(-5px);}}.szfy-mc-pulse{position:fixed;top:50%;left:50%;width:100px;height:100px;background:radial-gradient(circle,rgba(255,255,255,0.8) 0%,rgba(135,206,235,0.4) 30%,transparent 100%);border-radius:50%;transform:translate(-50%,-50%) scale(0) translateZ(0);z-index:1000001;pointer-events:none;will-change:transform,opacity;opacity:0;}.szfy-mc-pulse.szfy-active{animation:szfy-mc-shockwave 2.5s cubic-bezier(0.165,0.84,0.44,1) forwards;}@keyframes szfy-mc-shockwave{0%{transform:translate(-50%,-50%) scale(0) translateZ(0);opacity:1;}100%{transform:translate(-50%,-50%) scale(40) translateZ(0);opacity:0;}}.szfy-mc-motes-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;}.szfy-mc-mote{position:absolute;bottom:-10%;background:#FFF;border-radius:50%;box-shadow:0 0 6px 1px rgba(255,255,255,0.8),0 0 10px 2px rgba(135,206,235,0.5);opacity:0;animation:szfy-mc-float-up linear infinite;will-change:transform,opacity;transform:translateZ(0);}@keyframes szfy-mc-float-up{0%{transform:translateY(0) scale(0.5) translateZ(0);opacity:0;}20%{opacity:0.8;}80%{opacity:0.5;}100%{transform:translateY(-120vh) scale(1.2) translateZ(0);opacity:0;}}.szfy-mc-snowman-container{position:absolute;bottom:0;left:0;width:100%;height:100vh;z-index:1000006;pointer-events:none;overflow:hidden;}.szfy-mc-snowman{position:absolute;bottom:-250px;width:120px;height:180px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;will-change:transform,bottom;z-index:1000007;}.szfy-mc-sm-head{width:60px;height:60px;position:relative;z-index:3;}.szfy-mc-sm-head-orb{width:100%;height:100%;position:absolute;top:0;left:0;background:radial-gradient(circle at 35% 35%,#ffffff,#e6f2ff 70%,#b3d9ff 100%);border-radius:50%;box-shadow:inset -5px -5px 10px rgba(0,0,0,0.1),0 5px 15px rgba(0,0,0,0.2);overflow:hidden;}.szfy-mc-sm-body{width:100px;height:100px;background:radial-gradient(circle at 35% 35%,#ffffff,#e6f2ff 60%,#b3d9ff 100%);border-radius:50%;margin-top:-15px;position:relative;z-index:2;box-shadow:inset -10px -10px 20px rgba(0,0,0,0.1),0 5px 20px rgba(0,0,0,0.3);}.szfy-mc-sm-hat{position:absolute;top:-30px;left:50%;transform:translateX(-50%);width:50px;height:45px;background:linear-gradient(to right,#2c3e50,#34495e,#2c3e50);border-radius:5px 5px 0 0;z-index:4;transform-origin:bottom center;}.szfy-mc-sm-hat::after{content:'';position:absolute;bottom:0;left:-15px;width:80px;height:10px;background:#1a252f;border-radius:5px;}.szfy-mc-sm-hat::before{content:'';position:absolute;bottom:10px;left:0;width:100%;height:12px;background:#c0392b;}.szfy-mc-sm-face{position:absolute;width:100%;height:100%;top:0;left:0;z-index:3;}.szfy-mc-snowman.szfy-mc-face-left .szfy-mc-sm-face{transform:scaleX(-1);}.szfy-mc-sm-eye{position:absolute;top:25px;width:6px;height:6px;background:#2c3e50;border-radius:50%;}.szfy-mc-sm-eye.left{left:18px;}.szfy-mc-sm-eye.right{right:18px;}.szfy-mc-sm-nose{position:absolute;top:32px;left:30px;width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:20px solid #e67e22;transform:rotate(15deg);filter:drop-shadow(2px 5px 2px rgba(0,0,0,0.2));}.szfy-mc-sm-scarf{position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:70px;height:20px;background:#c0392b;border-radius:10px;z-index:4;box-shadow:0 5px 10px rgba(0,0,0,0.2);}.szfy-mc-sm-scarf-tail{position:absolute;top:10px;right:10px;width:15px;height:40px;background:#c0392b;border-radius:5px;transform:rotate(-15deg);transform-origin:top center;}.szfy-mc-sm-arm{position:absolute;top:100px;width:60px;height:6px;background:#8b4513;border-radius:3px;z-index:1;transform-origin:left center;}.szfy-mc-sm-arm.left{left:-35px;transform-origin:right center;transform:rotate(-30deg);}.szfy-mc-sm-arm.right{right:-35px;transform-origin:left center;transform:rotate(30deg);}.szfy-mc-snowball{position:absolute;top:90px;width:15px;height:15px;background:radial-gradient(circle at 35% 35%,#ffffff,#e6f2ff 70%);border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.1);z-index:5;opacity:0;pointer-events:none;}.szfy-mc-snowball.right-ball{right:-30px;}.szfy-mc-snowball.left-ball{left:-30px;}.szfy-mc-snowman{transform:scale(var(--sm-scale,1));}.szfy-mc-snowman.szfy-mc-animating{animation:szfy-mc-sm-popup 8s ease-in-out forwards,szfy-mc-sm-wobble 4s 1.5s ease-in-out 1.5;}@keyframes szfy-mc-sm-popup{0%{bottom:-250px;}15%{bottom:0px;}85%{bottom:0px;}100%{bottom:-250px;}}@keyframes szfy-mc-sm-wobble{0%,100%{transform:scale(var(--sm-scale,1)) rotate(0deg);}25%{transform:scale(var(--sm-scale,1)) rotate(5deg);}75%{transform:scale(var(--sm-scale,1)) rotate(-5deg);}}.szfy-mc-snowman.szfy-mc-animating .szfy-mc-sm-arm.right{animation:szfy-mc-sm-wave-right var(--wave-dur,2s) var(--wave-del,1.5s) ease-in-out var(--wave-count,3);}.szfy-mc-snowman.szfy-mc-animating .szfy-mc-sm-arm.left{animation:szfy-mc-sm-wave-left var(--wave-dur,2s) var(--wave-del,1.5s) ease-in-out var(--wave-count,3);}.szfy-mc-snowman.szfy-mc-animating.szfy-mc-throws .szfy-mc-sm-arm.right{animation:szfy-mc-sm-arm-throw-right 1.5s var(--wave-del,1.5s) ease-in-out forwards;}.szfy-mc-snowman.szfy-mc-animating.szfy-mc-throws .szfy-mc-sm-arm.left{animation:szfy-mc-sm-arm-throw-left 1.5s var(--wave-del,1.5s) ease-in-out forwards;}.szfy-mc-snowman.szfy-mc-animating.szfy-mc-throws .szfy-mc-snowball.right-ball{opacity:1;animation:szfy-mc-snowball-throw-right 1.5s calc(var(--wave-del,1.5s) + 0.4s) cubic-bezier(0.2,0.8,0.4,1) forwards;}.szfy-mc-snowman.szfy-mc-animating.szfy-mc-throws .szfy-mc-snowball.left-ball{opacity:1;animation:szfy-mc-snowball-throw-left 1.5s calc(var(--wave-del,1.5s) + 0.4s) cubic-bezier(0.2,0.8,0.4,1) forwards;}.szfy-mc-snowman.szfy-mc-animating .szfy-mc-sm-hat{animation:szfy-mc-sm-hat-tip var(--hat-dur,2s) var(--hat-del,2s) ease-in-out var(--hat-count,2);}.szfy-mc-snowman.szfy-mc-animating.szfy-mc-spin-head .szfy-mc-sm-face{animation:szfy-mc-sm-head-spin var(--spin-dur,3.5s) var(--spin-del,2s) linear var(--spin-count,1.5);}@keyframes szfy-mc-sm-wave-right{0%,100%{transform:rotate(30deg);}50%{transform:rotate(80deg);}}@keyframes szfy-mc-sm-wave-left{0%,100%{transform:rotate(-30deg);}50%{transform:rotate(-80deg);}}@keyframes szfy-mc-sm-hat-tip{0%,100%{transform:translateX(-50%) rotate(0deg);}50%{transform:translateX(-50%) rotate(-15deg) translateY(-5px);}}@keyframes szfy-mc-sm-head-spin{0%{transform:translateX(0);opacity:1;}45%{transform:translateX(-80px);opacity:1;}46%{transform:translateX(-80px);opacity:0;}54%{transform:translateX(80px);opacity:0;}55%{transform:translateX(80px);opacity:1;}100%{transform:translateX(0);opacity:1;}}@keyframes szfy-mc-sm-arm-throw-right{0%{transform:rotate(30deg);}30%{transform:rotate(-20deg);}50%{transform:rotate(100deg);}100%{transform:rotate(30deg);}}@keyframes szfy-mc-sm-arm-throw-left{0%{transform:rotate(-30deg);}30%{transform:rotate(20deg);}50%{transform:rotate(-100deg);}100%{transform:rotate(-30deg);}}@keyframes szfy-mc-snowball-throw-right{0%{transform:translate(0,0) scale(1);opacity:1;}15%{transform:translate(-10px,-20px) scale(1.1);opacity:1;}100%{transform:translate(300px,-600px) scale(3.5);opacity:0;}}@keyframes szfy-mc-snowball-throw-left{0%{transform:translate(0,0) scale(1);opacity:1;}15%{transform:translate(10px,-20px) scale(1.1);opacity:1;}100%{transform:translate(-300px,-600px) scale(3.5);opacity:0;}}#szfy-mc-canvas-bg,#szfy-mc-canvas-fg{position:absolute;top:0;left:0;width:100%;height:100%;display:block;}#szfy-mc-canvas-bg{z-index:999999;}#szfy-mc-canvas-fg{z-index:1000005;}.szfy-mc-idle-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000002;pointer-events:none;opacity:0;transition:opacity 2s ease-in-out;}.szfy-mc-idle-wrapper.szfy-idle-reveal{opacity:1;}`,
html: `<div class="szfy-mc-root" id="szfy-mc-root"><div class="szfy-mc-aurora" id="szfy-mc-aurora"></div><div class="szfy-mc-portal-overlay" id="szfy-mc-portal-overlay"><div class="szfy-mc-frost-frame"></div><div class="szfy-mc-center-glow"></div><div class="szfy-mc-holy-rays"></div><div class="szfy-mc-halo-ring"></div><div class="szfy-mc-motes-container" id="szfy-mc-motes-container"></div><div class="szfy-mc-star-curtain"> \${(() => { let res = ''; const drops = 10; const heights = [14, 24, 11, 26, 15, 21, 16, 28, 12, 18]; const shapes = [ "M50 5 L61 35 L95 35 L68 57 L79 91 L50 70 L21 91 L32 57 L5 35 L39 35 Z", // Star "M 50 10 C 70 10, 70 40, 70 60 C 70 70, 85 80, 90 80 L 10 80 C 15 80, 30 70, 30 60 C 30 40, 30 10, 50 10 Z", // Bell "M50 5 L 75 35 L 60 35 L 85 65 L 70 65 L 95 95 L 5 95 L 30 65 L 15 65 L 40 35 L 25 35 Z", // Tree "M 45 5 L 55 5 L 55 10 A 40 40 0 1 1 45.1 10 Z", // Ornament Ball "M50 5 L61 35 L95 35 L68 57 L79 91 L50 70 L21 91 L32 57 L5 35 L39 35 Z", // Star "M 50 10 C 70 10, 70 40, 70 60 C 70 70, 85 80, 90 80 L 10 80 C 15 80, 30 70, 30 60 C 30 40, 30 10, 50 10 Z", // Bell "M50 5 L 75 35 L 60 35 L 85 65 L 70 65 L 95 95 L 5 95 L 30 65 L 15 65 L 40 35 L 25 35 Z", // Tree "M 45 5 L 55 5 L 55 10 A 40 40 0 1 1 45.1 10 Z", // Ornament Ball "M50 5 L61 35 L95 35 L68 57 L79 91 L50 70 L21 91 L32 57 L5 35 L39 35 Z", // Star "M 50 10 C 70 10, 70 40, 70 60 C 70 70, 85 80, 90 80 L 10 80 C 15 80, 30 70, 30 60 C 30 40, 30 10, 50 10 Z" // Bell ]; for (let i = 0; i < drops; i++) { const left = 3 + (i * 10); // evenly spread across 100% (10 drops * ~10% separation) const dropHeight = heights[i]; const swayDelay = -(Math.random() * 4); const swaySpeed = 4 + Math.random() * 2; const pathData = shapes[i]; res += '<div class="szfy-mc-star-drop" style="left:' + left + '%; height:' + dropHeight + 'vh; animation: szfy-mc-star-sway ' + swaySpeed + 's ease-in-out ' + swayDelay + 's infinite alternate;">'; res += '<div class="szfy-mc-star-wire"></div>'; const ledCount = Math.floor(dropHeight / 6); for (let j = 0; j < ledCount; j++) { const top = (j / ledCount) * 100; const twinkleDelay = -(Math.random() * 3); res += '<div class="szfy-mc-wire-led" style="top:' + top + '%; animation-delay:' + twinkleDelay + 's;"></div>'; } res += '<div class="szfy-mc-hanging-star">'; // Bright, slightly off-white extrusion path mimicking physical glowing LED channel res += '<svg viewBox="0 0 100 100"><path d="' + pathData + '" fill="none" stroke="#fffcf2" stroke-width="4" stroke-linejoin="round"/></svg>'; res += '</div></div>'; } return res; })()} </div><div class="szfy-mc-css-tree left"><div class="szfy-mc-tree-img"></div><div class="szfy-mc-fl fl-w" style="bottom:12%; left:20%; animation-delay: 0.1s;"></div><div class="szfy-mc-fl fl-r" style="bottom:16%; left:30%; animation-delay: 0.4s;"></div><div class="szfy-mc-fl fl-y" style="bottom:22%; left:45%; animation-delay: 0.7s;"></div><div class="szfy-mc-fl fl-b" style="bottom:15%; left:65%; animation-delay: 0.2s;"></div><div class="szfy-mc-fl fl-g" style="bottom:18%; left:80%; animation-delay: 0.8s;"></div><div class="szfy-mc-fl fl-y" style="bottom:30%; left:25%; animation-delay: 0.9s;"></div><div class="szfy-mc-fl fl-w" style="bottom:34%; left:40%; animation-delay: 0.3s;"></div><div class="szfy-mc-fl fl-r" style="bottom:28%; left:58%; animation-delay: 0.6s;"></div><div class="szfy-mc-fl fl-g" style="bottom:35%; left:75%; animation-delay: 0.1s;"></div><div class="szfy-mc-fl fl-b" style="bottom:45%; left:30%; animation-delay: 0.4s;"></div><div class="szfy-mc-fl fl-y" style="bottom:49%; left:48%; animation-delay: 0.7s;"></div><div class="szfy-mc-fl fl-w" style="bottom:52%; left:68%; animation-delay: 0.2s;"></div><div class="szfy-mc-fl fl-r" style="bottom:42%; left:78%; animation-delay: 0.5s;"></div><div class="szfy-mc-fl fl-g" style="bottom:62%; left:35%; animation-delay: 0.9s;"></div><div class="szfy-mc-fl fl-w" style="bottom:68%; left:45%; animation-delay: 0.6s;"></div><div class="szfy-mc-fl fl-b" style="bottom:60%; left:65%; animation-delay: 0.3s;"></div><div class="szfy-mc-fl fl-y" style="bottom:75%; left:50%; animation-delay: 0.8s;"></div><div class="szfy-mc-fl fl-r" style="bottom:82%; left:48%; animation-delay: 0.5s;"></div></div><div class="szfy-mc-css-tree right"><div class="szfy-mc-tree-img" style="transform: scaleX(-1);"></div><div class="szfy-mc-fl fl-w" style="bottom:12%; left:80%; animation-delay: 0.1s;"></div><div class="szfy-mc-fl fl-y" style="bottom:16%; left:70%; animation-delay: 0.4s;"></div><div class="szfy-mc-fl fl-r" style="bottom:22%; left:55%; animation-delay: 0.7s;"></div><div class="szfy-mc-fl fl-b" style="bottom:15%; left:35%; animation-delay: 0.2s;"></div><div class="szfy-mc-fl fl-g" style="bottom:18%; left:20%; animation-delay: 0.8s;"></div><div class="szfy-mc-fl fl-y" style="bottom:30%; left:75%; animation-delay: 0.9s;"></div><div class="szfy-mc-fl fl-w" style="bottom:34%; left:60%; animation-delay: 0.3s;"></div><div class="szfy-mc-fl fl-r" style="bottom:28%; left:42%; animation-delay: 0.6s;"></div><div class="szfy-mc-fl fl-g" style="bottom:35%; left:25%; animation-delay: 0.1s;"></div><div class="szfy-mc-fl fl-b" style="bottom:45%; left:70%; animation-delay: 0.4s;"></div><div class="szfy-mc-fl fl-y" style="bottom:49%; left:52%; animation-delay: 0.7s;"></div><div class="szfy-mc-fl fl-w" style="bottom:52%; left:32%; animation-delay: 0.2s;"></div><div class="szfy-mc-fl fl-r" style="bottom:42%; left:22%; animation-delay: 0.5s;"></div><div class="szfy-mc-fl fl-g" style="bottom:62%; left:65%; animation-delay: 0.9s;"></div><div class="szfy-mc-fl fl-w" style="bottom:68%; left:55%; animation-delay: 0.6s;"></div><div class="szfy-mc-fl fl-b" style="bottom:60%; left:35%; animation-delay: 0.3s;"></div><div class="szfy-mc-fl fl-y" style="bottom:75%; left:50%; animation-delay: 0.8s;"></div><div class="szfy-mc-fl fl-w" style="bottom:82%; left:52%; animation-delay: 0.5s;"></div></div><div class="szfy-mc-css-tree left-small"><div class="szfy-mc-tree-img"></div><div class="szfy-mc-fl fl-w" style="bottom:22%; left:30%; animation-delay: 0.1s;"></div><div class="szfy-mc-fl fl-r" style="bottom:40%; left:45%; animation-delay: 0.9s;"></div><div class="szfy-mc-fl fl-y" style="bottom:49%; left:68%; animation-delay: 0.7s;"></div><div class="szfy-mc-fl fl-b" style="bottom:60%; left:55%; animation-delay: 0.3s;"></div><div class="szfy-mc-fl fl-g" style="bottom:75%; left:50%; animation-delay: 0.8s;"></div></div><div class="szfy-mc-css-tree right-small"><div class="szfy-mc-tree-img" style="transform: scaleX(-1);"></div><div class="szfy-mc-fl fl-w" style="bottom:22%; left:70%; animation-delay: 0.1s;"></div><div class="szfy-mc-fl fl-r" style="bottom:40%; left:55%; animation-delay: 0.9s;"></div><div class="szfy-mc-fl fl-y" style="bottom:49%; left:32%; animation-delay: 0.7s;"></div><div class="szfy-mc-fl fl-b" style="bottom:60%; left:45%; animation-delay: 0.3s;"></div><div class="szfy-mc-fl fl-g" style="bottom:75%; left:50%; animation-delay: 0.8s;"></div></div><svg class="szfy-mc-portal-star" viewBox="0 0 100 100"><defs><linearGradient id="mcStarGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFFFF" /><stop offset="100%" stop-color="#87CEEB" /></linearGradient></defs><g fill="none" stroke="url(#mcStarGrad)" stroke-width="0.5" opacity="0.8"><path d="M50,5 L50,95 M5,50 L95,50 M18,18 L82,82 M18,82 L82,18" stroke-width="0.8"/><polygon points="50,30 70,50 50,70 30,50" stroke-dasharray="1 2"/><circle cx="50" cy="50" r="25" stroke-dasharray="0.5 3"/><circle cx="50" cy="50" r="40" stroke-width="0.2" opacity="0.4"/><path d="M50,15 L55,25 L45,25 Z M50,85 L55,75 L45,75 Z M15,50 L25,45 L25,55 Z M85,50 L75,45 L75,55 Z" fill="url(#mcStarGrad)" stroke="none" opacity="0.5"/></g></svg><div class="szfy-mc-proclamation"><h1 class="szfy-mc-greeting-cursive" id="szfy-mc-greeting">Merry Christmas</h1><div class="szfy-mc-subtext" id="szfy-mc-subtext"></div></div><div class="szfy-mc-bottom-ground"><div class="szfy-mc-snowdrifts"></div></div></div><canvas id="szfy-mc-canvas-bg"></canvas><canvas id="szfy-mc-canvas-fg"></canvas><div class="szfy-mc-idle-wrapper" id="szfy-mc-idle-wrapper"></div><div class="szfy-mc-pulse" id="szfy-mc-pulse"></div><div id="szfy-mc-snowman-container" class="szfy-mc-snowman-container"></div></div>`,
js: `(function() {
const root = document.getElementById('szfy-mc-root');
if (!root || root.getAttribute('data-szfy-init')) return;
document.querySelectorAll('.szfy-mc-root').forEach(el => {
if (el !== root) el.remove();
});
root.setAttribute('data-szfy-init', 'true');
const bgCanvas = document.getElementById('szfy-mc-canvas-bg');
const fgCanvas = document.getElementById('szfy-mc-canvas-fg');
const bgCtx = bgCanvas.getContext('2d');
const fgCtx = fgCanvas.getContext('2d');
const portal = document.getElementById('szfy-mc-portal-overlay');
const aurora = document.getElementById('szfy-mc-aurora');
const idleWrapper = document.getElementById('szfy-mc-idle-wrapper');
let width, height, animationId;
let snowflakes = [];
let shootingStars = [];
let isRevealed = false;
let isScreensaverActive = false;
let isIdleRevealed = false;
let idleTimer1m, idleTimer5m;
let globalWind = 0;
let targetWind = 0.5;
function getBrandName() {
try {
if (window.SeazonifyBrand) return window.SeazonifyBrand;
const ogSite = document.querySelector('meta[property="og:site_name"]');
if (ogSite && ogSite.content) return ogSite.content;
let title = document.title || "";
if (title) {
title = title.split(/[|\\-–—]/)[0].trim();
if (title.length > 3 && title.length < 25) return title;
}
return null;
} catch(e) { return null; }
}
function resize() {
width = window.innerWidth;
height = window.innerHeight;
bgCanvas.width = fgCanvas.width = width;
bgCanvas.height = fgCanvas.height = height;
}
function initParticles() {
snowflakes = [];
// Responsive particle scale (100% at desktop max-width, less on mobile/tablets)
const particleScale = Math.max(0.3, Math.min(1.0, width / 1600));
const bgCount = Math.floor(135 * particleScale);
for(let i=0; i<bgCount; i++) {
snowflakes.push({
layer: 'bg',
x: Math.random() * width,
y: Math.random() * height,
s: Math.random() * 1.5 + 0.5,
baseVy: Math.random() * 0.2 + 0.1,
drift: Math.random() * 0.4 - 0.2,
vx: 0,
o: Math.random() * 0.4 + 0.1,
wobble: Math.random() * Math.PI * 2,
wobbleSpeed: Math.random() * 0.015 + 0.005
});
}
const midCount = Math.floor(72 * particleScale);
for(let i=0; i<midCount; i++) {
snowflakes.push({
layer: 'mid',
x: Math.random() * width,
y: Math.random() * height,
s: Math.random() * 2.5 + 1.5,
baseVy: Math.random() * 0.5 + 0.2,
drift: Math.random() * 0.6 - 0.3,
vx: 0,
o: Math.random() * 0.6 + 0.4,
wobble: Math.random() * Math.PI * 2,
wobbleSpeed: Math.random() * 0.02 + 0.01
});
}
const fgCount = Math.floor(27 * particleScale);
for(let i=0; i<fgCount; i++) {
snowflakes.push({
layer: 'fg',
x: Math.random() * width,
y: Math.random() * height,
s: Math.random() * 5 + 3,
baseVy: Math.random() * 0.8 + 0.5,
drift: Math.random() * 1.0 - 0.5,
vx: 0,
o: Math.random() * 0.3 + 0.1,
wobble: Math.random() * Math.PI * 2,
wobbleSpeed: Math.random() * 0.03 + 0.01
});
}
}
function spawnShootingStar() {
if (Math.random() > 0.3) return;
const startX = Math.random() * width;
const startY = Math.random() * (height * 0.4);
shootingStars.push({
x: startX,
y: startY,
len: Math.random() * 150 + 50,
vx: (Math.random() * 10 + 15) * (Math.random() > 0.5 ? 1 : -1),
vy: Math.random() * 5 + 5,
life: 1.0,
decay: Math.random() * 0.02 + 0.01
});
}
function draw() {
bgCtx.clearRect(0, 0, width, height);
fgCtx.clearRect(0, 0, width, height);
if (!isRevealed) {
const grad = bgCtx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width*0.8);
grad.addColorStop(0, '#000814');
grad.addColorStop(1, '#000000');
bgCtx.fillStyle = grad;
bgCtx.fillRect(0, 0, width, height);
}
if (Math.random() < 0.02) {
targetWind = (Math.random() - 0.5) * 1.5;
}
globalWind += (targetWind - globalWind) * 0.005;
for (let i = shootingStars.length - 1; i >= 0; i--) {
const ss = shootingStars[i];
ss.x += ss.vx;
ss.y += ss.vy;
ss.life -= ss.decay;
if (ss.life <= 0 || ss.y > height || ss.x < -200 || ss.x > width + 200) {
shootingStars.splice(i, 1);
continue;
}
bgCtx.beginPath();
bgCtx.moveTo(ss.x, ss.y);
bgCtx.lineTo(ss.x - (ss.vx * (ss.len/20)), ss.y - (ss.vy * (ss.len/20)));
bgCtx.strokeStyle = \`rgba(255, 255, 255, \${ss.life})\`;
bgCtx.lineWidth = ss.life * 2;
bgCtx.stroke();
}
if (Math.random() < 0.005) {
spawnShootingStar();
}
bgCtx.fillStyle = "#FFF";
fgCtx.fillStyle = "#FFF";
snowflakes.forEach(p => {
p.wobble += p.wobbleSpeed;
const windInfluence = (p.layer === 'fg' ? 1.5 : (p.layer === 'mid' ? 1.0 : 0.5)) + (p.drift * 0.5);
p.vx = Math.sin(p.wobble) * (p.s * 0.2) + p.drift + (globalWind * windInfluence);
// Y-axis: Combine base gravity and slight vertical drifting/slowdowns as it falls
p.vy = p.baseVy + Math.cos(p.wobble * 0.5) * Math.max(0, p.baseVy * 0.3);
p.x += p.vx;
p.y += p.vy;
if (p.y > height + 10) {
p.y = -10;
p.x = Math.random() * width;
}
if (p.x > width + 10) p.x = -10;
if (p.x < -10) p.x = width + 10;
const targetCtx = p.layer === 'fg' ? fgCtx : bgCtx;
let alpha = p.o;
if (!isRevealed || isIdleRevealed) {
alpha = Math.min(alpha * 1.5, 1); // Bolder when active/idle
}
targetCtx.globalAlpha = alpha;
targetCtx.beginPath();
targetCtx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
targetCtx.fill();
if (p.layer === 'mid' && alpha > 0.5) {
targetCtx.shadowBlur = 4;
targetCtx.shadowColor = '#FFF';
targetCtx.fill();
targetCtx.shadowBlur = 0;
}
});
animationId = requestAnimationFrame(draw);
}
function initMotes() {
const container = document.getElementById('szfy-mc-motes-container');
if (!container) return;
let particleScale = Math.max(0.3, Math.min(1.0, width / 1600));
const moteCount = Math.floor(27 * particleScale);
for(let i=0; i<moteCount; i++) {
const mote = document.createElement('div');
mote.className = 'szfy-mc-mote';
mote.style.left = Math.random() * 100 + '%';
const dur = (Math.random() * 10 + 10);
mote.style.animationDuration = dur + 's';
mote.style.animationDelay = (Math.random() * 6) + 's';
const size = (Math.random() * 3 + 1.5);
mote.style.width = size + 'px';
mote.style.height = size + 'px';
container.appendChild(mote);
}
}
function spawnSnowman() {
const container = document.getElementById('szfy-mc-snowman-container');
if (!container || isScreensaverActive) return;
let maxSnowmen = 1;
if (width > 768) maxSnowmen = 2;
if (width > 1200) maxSnowmen = 3 + Math.floor(Math.random() * 2);
const existingSnowmen = container.querySelectorAll('.szfy-mc-snowman');
if (existingSnowmen.length >= maxSnowmen) return;
let validLeft = false;
let randomLeft = 50;
for (let attempts = 0; attempts < 10; attempts++) {
randomLeft = Math.random() * 80 + 10;
let tooClose = false;
existingSnowmen.forEach(existing => {
const elLeft = parseFloat(existing.dataset.leftPos || "0");
if (Math.abs(randomLeft - elLeft) < 15) {
tooClose = true;
}
});
if (!tooClose) {
validLeft = true;
break;
}
}
if (!validLeft && existingSnowmen.length > 0) return;
const sm = document.createElement('div');
const doHeadSpin = Math.random() > 0.5 ? ' szfy-mc-spin-head' : '';
const doesThrow = Math.random() > 0.6 ? ' szfy-mc-throws' : '';
const faceLeft = Math.random() > 0.5 ? ' szfy-mc-face-left' : '';
sm.className = 'szfy-mc-snowman szfy-mc-animating' + doHeadSpin + doesThrow + faceLeft;
sm.dataset.leftPos = randomLeft;
sm.style.left = randomLeft + '%';
const scale = 0.8 + Math.random() * 0.4;
sm.style.setProperty('--sm-scale', scale);
const waveDur = 1.5 + Math.random() * 1.5;
const waveDel = 1.0 + Math.random() * 1.5;
const waveCount = 2 + Math.floor(Math.random() * 3);
const hatDur = 1.8 + Math.random() * 1.2;
const hatDel = 1.5 + Math.random() * 1.0;
const hatCount = 1 + Math.floor(Math.random() * 2);
const spinDur = 0.6 + Math.random() * 0.4;
const spinDel = 1.0 + Math.random() * 3.0;
const spinCount = 1 + Math.floor(Math.random() * 2);
sm.style.setProperty('--wave-dur', waveDur + 's');
sm.style.setProperty('--wave-del', waveDel + 's');
sm.style.setProperty('--wave-count', waveCount);
sm.style.setProperty('--hat-dur', hatDur + 's');
sm.style.setProperty('--hat-del', hatDel + 's');
sm.style.setProperty('--hat-count', hatCount);
sm.style.setProperty('--spin-dur', spinDur + 's');
sm.style.setProperty('--spin-del', spinDel + 's');
sm.style.setProperty('--spin-count', spinCount);
sm.innerHTML = \`
              <div class="szfy-mc-sm-head">
                  <div class="szfy-mc-sm-hat"></div>
                  <div class="szfy-mc-sm-head-orb">
                      <div class="szfy-mc-sm-face">
                          <div class="szfy-mc-sm-eye left"></div>
                          <div class="szfy-mc-sm-eye right"></div>
                          <div class="szfy-mc-sm-nose"></div>
                      </div>
                  </div>
              </div>
              <div class="szfy-mc-sm-scarf">
                  <div class="szfy-mc-sm-scarf-tail"></div>
              </div>
              <div class="szfy-mc-sm-arm left"></div>
              <div class="szfy-mc-sm-arm right"></div>
              <div class="szfy-mc-snowball left-ball"></div>
              <div class="szfy-mc-snowball right-ball"></div>
              <div class="szfy-mc-sm-body"></div>
          \`;
container.appendChild(sm);
setTimeout(() => {
if (sm.parentNode === container) {
container.removeChild(sm);
}
}, 8000);
}
function triggerReveal(skipAnimation = false) {
if (isRevealed) return;
isRevealed = true;
isScreensaverActive = false;
portal.classList.remove('szfy-screensaver-active');
if (skipAnimation) {
portal.style.transition = 'none';
portal.classList.add('szfy-fade-out');
aurora.classList.add('szfy-lingering');
setTimeout(() => {
portal.style.transition = '';
}, 100);
} else {
portal.style.transition = '';
portal.classList.add('szfy-fade-out');
aurora.classList.add('szfy-lingering');
const pulse = document.getElementById('szfy-mc-pulse') || createPulse();
pulse.classList.add('szfy-active');
setTimeout(spawnShootingStar, 500);
setTimeout(spawnShootingStar, 1200);
setTimeout(spawnShootingStar, 2500);
setTimeout(() => {
if(pulse) pulse.remove();
}, 2500);
}
}
function createPulse() {
const p = document.createElement('div');
p.className = 'szfy-mc-pulse';
p.id = 'szfy-mc-pulse';
root.appendChild(p);
return p;
}
function hideIdleState() {
isIdleRevealed = false;
idleWrapper.classList.remove('szfy-idle-reveal');
}
function showIdleState() {
isIdleRevealed = true;
idleWrapper.classList.add('szfy-idle-reveal');
}
function goScreensaver() {
if (isScreensaverActive) return;
isScreensaverActive = true;
isRevealed = false;
portal.style.transition = '';
portal.classList.remove('szfy-fade-out');
portal.classList.add('szfy-screensaver-active');
aurora.classList.remove('szfy-lingering');
const star = portal.querySelector('.szfy-mc-portal-star');
const greeting = portal.querySelector('.szfy-mc-greeting-cursive');
[star, greeting].forEach(el => {
if (el) {
const clone = el.cloneNode(true);
el.parentNode.replaceChild(clone, el);
}
});
}
function resetIdleTimers() {
clearTimeout(idleTimer1m);
clearTimeout(idleTimer5m);
if (isScreensaverActive) {
triggerReveal();
hideIdleState();
} else {
hideIdleState();
}
idleTimer1m = setTimeout(showIdleState, 45000);
idleTimer5m = setTimeout(goScreensaver, 300000);
}
function init() {
resize();
initParticles();
initMotes();
const brand = getBrandName();
if (brand) {
document.getElementById('szfy-mc-subtext').textContent = "From " + brand;
}
draw();
setTimeout(spawnSnowman, 500);
setInterval(() => {
if (Math.random() > 0.4) spawnSnowman();
}, 3000);
let hasSeenWelcome = false;
try {
const lastSeen = localStorage.getItem('szfy-mc-welcome-seen');
if (lastSeen) {
const now = new Date().getTime();
if (now - parseInt(lastSeen, 10) < 12 * 60 * 60 * 1000) {
hasSeenWelcome = true;
}
}
} catch(e) {}
if (hasSeenWelcome) {
triggerReveal(true);
} else {
setTimeout(() => {
if (!isRevealed && !isScreensaverActive) {
triggerReveal(false);
}
}, 6500);
try {
localStorage.setItem('szfy-mc-welcome-seen', new Date().getTime().toString());
} catch(e) {}
}
window.addEventListener('resize', resize, {passive: true});
const interactionEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'];
interactionEvents.forEach(evt => {
window.addEventListener(evt, resetIdleTimers, {passive: true});
});
resetIdleTimers();
}
init();
})();`
};
if (typeof window !== 'undefined' && window.SeazonifyController) {
window.SeazonifyController.injectVisualEffect(merryChristmasEffect);
}
if (typeof module !== 'undefined' && module.exports) {
module.exports = merryChristmasEffect;
}