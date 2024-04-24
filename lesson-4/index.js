import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();
scene.add(group);
group.scale.y = 0.5;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(cube2);
cube2.position.x = 2;
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
group.add(cube3);
cube3.position.x = -1.5;
// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0.7;
mesh.position.y = -1;
mesh.position.z = 0.5;
scene.add(mesh);
// mesh.position.set(0.7, -1, 0.5);

// length расстояние между центром и куда двинулься объект
console.log(mesh.position.length());
// normalize нормализация вектора это уменьшит на 1
mesh.position.normalize();
console.log(mesh.position.length());

//Scale
// mesh.scale.x = 0.2;
// mesh.scale.set(2, 0.5, 3);

// Rotation
mesh.rotation.reorder('XYZ');
mesh.rotation.y = Math.PI / 4;
mesh.rotation.x = Math.PI / 4;
mesh.rotation.z = Math.PI / 4;

// Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);
// камера будет смотреть на центр предмета
camera.lookAt(mesh.position);

// distanceTo() расстояние между двумя точками
console.log(camera.position.distanceTo(mesh.position));

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);