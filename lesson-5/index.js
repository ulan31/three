import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);


// Animations
// const tick = () => {
//   mesh.rotation.x += 0.01;
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// }

let time = Date.now();

// const tick = () => {
//   const elapsedTime = Date.now() - time;
//   time = Date.now();
//   mesh.rotation.y += 0.0002*elapsedTime;
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// }

//Clock
// const clock = new THREE.Clock();
//
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   // mesh.rotation.y = elapsedTime;
//   // mesh.position.y = elapsedTime;
//   // mesh.position.y = Math.sin(elapsedTime);
//   // mesh.position.x = Math.cos(elapsedTime);
//   camera.position.x = Math.sin(elapsedTime);
//   camera.position.y = Math.cos(elapsedTime);
//   camera.lookAt(mesh.position);
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// }
//
// tick();

// gsap
gsap.to(mesh.position, { duration: 3, delay: 1 , x:2});
gsap.to(mesh.position, { duration: 3, delay: 2 , x:0});

const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}

tick();