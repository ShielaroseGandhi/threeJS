let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  // camera (fov, aspect, near, far)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias makes edges sharper
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(2, 2, 2);

  const texture = new THREE.TextureLoader().load("textures/CLICKME.png");
  const material = new THREE.MeshStandardMaterial({ map: texture });

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.x = 2;
  light.position.y = -2;
  light.position.z = 2;

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  scene.add(light);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y -= 0.01;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();
