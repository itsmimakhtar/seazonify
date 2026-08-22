const mapleLeaves3DEffect = {
name: "Maple Leaves 3D",
description: "Stunning 3D maple leaves floating with realistic physics, wind effects, and immersive perspective depth creating a magical autumn atmosphere",
icon: "🍁",
type: "visual",
author: "Md Mim Akhtar",
license: "https://seazonify.com/license",
thumbnail: "https://cdn.jsdelivr.net/gh/itsmimakhtar/Seazonify@main/assets/effects/visual/thumbnails/maple-leaves-3d.webp",
version: "1.0.1",
created: "2026-08-22",
category: "seasonal",
tags: ["maple", "leaves", "3d", "autumn", "floating"],
css: `.szfy-maple-leaves-3d{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;perspective:800px;background:linear-gradient(180deg,rgba(135,206,235,0.05) 0%,rgba(255,140,0,0.02) 50%,rgba(139,69,19,0.03) 100%);}.szfy-maple-leaf-3d{position:absolute;width:28px;height:28px;background-image:url('https://cdn.jsdelivr.net/gh/itsmimakhtar/Seazonify@main/assets/effects/visual/assets/img/maple-leaf.webp');background-size:100% 100%;background-repeat:no-repeat;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.4));transform-style:preserve-3d;opacity:0.9;will-change:transform,opacity;backface-visibility:hidden;}@media (max-width:768px){.szfy-maple-leaf-3d{filter:none;}}`,
html: `<div class="szfy-maple-leaves-3d" id="szfy-maple-leaves-3d-container"></div>`,
js: `(function() {
const container = document.getElementById('szfy-maple-leaves-3d-container');
if (!container) return;
let maxLeaves = window.innerWidth < 768 ? 15 : 35;
const leaves = [];
let animationId = null;
function random(min, max) {
return min + Math.random() * (max - min);
}
class MapleLeaf3D {
constructor() {
this.element = null;
this.x = 0;
this.y = 0;
this.z = 0;
this.rotationX = 0;
this.rotationY = 0;
this.rotationZ = 0;
this.scale = 1;
this.velocityX = 0;
this.velocityY = 0;
this.velocityZ = 0;
this.rotationSpeedX = 0;
this.rotationSpeedY = 0;
this.rotationSpeedZ = 0;
this.life = 1.0;
this.age = 0;
this.init();
}
init() {
this.element = document.createElement('div');
this.element.className = 'szfy-maple-leaf-3d';
this.x = random(0, window.innerWidth);
this.y = random(-200, -100);
this.z = random(-200, 200);
this.scale = random(0.7, 1.3);
this.velocityX = random(-0.3, 0.3);
this.velocityY = random(0.5, 1.2);
this.velocityZ = random(-0.1, 0.1);
this.rotationSpeedX = random(-2, 2);
this.rotationSpeedY = random(-2, 2);
this.rotationSpeedZ = random(-1, 1);
this.updateTransform();
container.appendChild(this.element);
}
updateTransform() {
const transform = \`translate3d(\${this.x}px, \${this.y}px, \${this.z}px) rotateX(\${this.rotationX}deg) rotateY(\${this.rotationY}deg) rotateZ(\${this.rotationZ}deg) scale(\${this.scale})\`;
this.element.style.transform = transform;
}
update(deltaTime, windStrength, windDirection) {
this.age += deltaTime;
this.velocityX += windStrength * 0.0005;
this.velocityY += windDirection * 0.0002;
this.velocityY += 0.0008;
this.velocityX *= 0.998;
this.velocityY *= 0.999;
this.velocityZ *= 0.995;
if (Math.random() < 0.01) {
this.velocityX += random(-0.2, 0.2);
this.velocityY += random(-0.1, 0.1);
}
this.x += this.velocityX * deltaTime * 0.1;
this.y += this.velocityY * deltaTime * 0.1;
this.z += this.velocityZ * deltaTime * 0.1;
this.rotationX += this.rotationSpeedX * deltaTime * 0.05;
this.rotationY += this.rotationSpeedY * deltaTime * 0.05;
this.rotationZ += this.rotationSpeedZ * deltaTime * 0.05;
this.rotationZ += windStrength * 0.1;
this.scale = 1 + (this.z / 1000);
this.life -= deltaTime * 0.00008;
this.element.style.opacity = Math.max(0, this.life);
this.updateTransform();
if (this.y > window.innerHeight + 100 || this.life <= 0 ||
this.x < -100 || this.x > window.innerWidth + 100 ||
this.z < -500 || this.z > 500) {
this.destroy();
return false;
}
return true;
}
destroy() {
if (this.element && this.element.parentNode) {
this.element.parentNode.removeChild(this.element);
}
}
}
function createLeaf() {
if (leaves.length < maxLeaves) {
leaves.push(new MapleLeaf3D());
}
}
function animate(currentTime) {
let deltaTime = currentTime - (lastTime || currentTime);
// Clamp deltaTime to prevent huge physics jumps on tab switch/lag
if (deltaTime > 50) deltaTime = 16;
lastTime = currentTime;
const windStrength = Math.sin(currentTime * 0.001) * 0.5 + Math.sin(currentTime * 0.003) * 0.3;
const windDirection = Math.sin(currentTime * 0.002) * 0.4;
for (let i = leaves.length - 1; i >= 0; i--) {
if (!leaves[i].update(deltaTime, windStrength, windDirection)) {
leaves.splice(i, 1);
}
}
if (Math.random() < 0.015 && leaves.length < maxLeaves) {
createLeaf();
}
animationId = requestAnimationFrame(animate);
}
let resizeTimeout;
function handleResize() {
if (resizeTimeout) clearTimeout(resizeTimeout);
resizeTimeout = setTimeout(() => {
maxLeaves = window.innerWidth < 768 ? 15 : 35;
}, 250);
}
function handleVisibilityChange() {
if (document.hidden) {
if (animationId) {
cancelAnimationFrame(animationId);
animationId = null;
}
} else {
if (!animationId) {
animationId = requestAnimationFrame(animate);
}
}
}
let lastTime = 0;
for (let i = 0; i < Math.min(12, maxLeaves); i++) {
setTimeout(() => createLeaf(), i * 150);
}
animationId = requestAnimationFrame(animate);
window.addEventListener('resize', handleResize);
document.addEventListener('visibilitychange', handleVisibilityChange);
window.szfyMapleLeaves3DCleanup = function() {
if (animationId) {
cancelAnimationFrame(animationId);
}
leaves.forEach(leaf => {
leaf.destroy();
});
leaves.length = 0;
if (container) {
container.innerHTML = '';
}
window.removeEventListener('resize', handleResize);
document.removeEventListener('visibilitychange', handleVisibilityChange);
};
})();`
};
if (typeof window !== 'undefined' && window.SeazonifyController) {
window.SeazonifyController.injectVisualEffect(mapleLeaves3DEffect);
}
if (typeof module !== 'undefined' && module.exports) {
module.exports = mapleLeaves3DEffect;
}
