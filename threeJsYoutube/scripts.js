// GETTING STARTED WITH THREE JS YOUTUBE VIDEO
// let scene, camera, renderer, cube;

// function init() {
//   scene = new THREE.Scene();

//   // camera (fov, aspect, near, far)
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias makes edges sharper
//   renderer.setSize(window.innerWidth, window.innerHeight);

//   document.body.appendChild(renderer.domElement);

//   const geometry = new THREE.BoxGeometry(2, 2, 2);

//   const texture = new THREE.TextureLoader().load("textures/CLICKME.png");
//   const material = new THREE.MeshStandardMaterial({ map: texture });

//   const light = new THREE.DirectionalLight(0xffffff, 1);
//   light.position.x = 2;
//   light.position.y = -2;
//   light.position.z = 2;

//   cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   scene.add(light);

//   camera.position.z = 5;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y -= 0.01;
//   renderer.render(scene, camera);
// }

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener("resize", onWindowResize, false);

// init();
// animate();

//
//
//
// CRASH COURSE

let scene, camera, renderer;

function crashCourseInit() {
  scene = new THREE.Scene();

  const fov = 75;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const aspect = w / h;
  const near = 0.01;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 5;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });

  const mesh = new THREE.Mesh(geometry, material);

  //   mesh.position.set(2, 2, -2);

  scene.add(mesh);

  const light = new THREE.PointLight(0xffffff, 1, 500); // color, intensity, distance
  light.position.set(10, 0, 25);
  scene.add(light);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor("#e5e5e5"); // sets bg colour of renderer
  renderer.setSize(w, h);

  document.body.appendChild(renderer.domElement);

  const render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
  };

  render();

  // GSAP
  tl = gsap.timeline({ paused: true });
  console.log(mesh);
  tl.to(mesh.scale, { duration: 1, x: 3, ease: Expo.out });
  tl.to(mesh.scale, { duration: 0.5, x: 0.5, ease: Expo.out });
  tl.to(mesh.position, { duration: 0.5, x: 2, ease: Expo.out });
  tl.to(
    mesh.rotation,
    { duration: 0.5, y: Math.PI * 0.5, ease: Expo.out },
    "=-1.5"
  );

  document.body.addEventListener("click", function() {
    tl.play();
  });
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});

crashCourseInit();
