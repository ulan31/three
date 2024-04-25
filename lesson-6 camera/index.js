import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Cursor
const cursor = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
  console.log(cursor.y);
});

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
//const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 0.1, 100);

const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(-1*aspectRatio, 1*aspectRatio, 1, -1, 0.1, 100);
camera.position.z = 3;
camera.position.y = 0.5;
camera.lookAt(mesh.position);
console.log(camera.position.length())
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = false;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  // mesh.rotation.y = elapsedTime;
  // camera.position.x = cursor.x*3;
  // camera.position.y = cursor.y*3;

  // camera.position.x = Math.sin(cursor.x*5)*3;
  // camera.position.z = Math.cos(cursor.x*5)*3;
  // camera.position.y = cursor.y*5;

  // camera.lookAt(mesh.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
