// Initialize three js in canvas
function main() {
  const canvas = document.getElementById("canvas");
  const renderer = new THREE.WebGLRenderer({ canvas }); // create a renderer in the canvas

  // create a camera
  const fov = 75; // field of view in degrees (75 degrees in vertical dimension)
  const aspect = 2; // default for canvas (300x150px or 300/150 === 2)
  const near = 0.1;
  const far = 5; // near and far represent the space in front of the camera
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2; // adjust z position of camera

  // create a scene
  const scene = new THREE.Scene();

  // create a BoxGeometry - a box
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // add more cubes with different colours, but same geometry
  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  // create cubes with different colours
  const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2)
  ];

  // create basic material for the box and set its colour
  //   const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // 6 digit hex colour values
  //   const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 }); // Mesh Basic Material is not affected by lights, so I had to change the material

  // create a mesh -- combination of geometry and material, and the position, orientation, and scale
  //   const cube = new THREE.Mesh(geometry, material);

  // add mesh to the scene
  //   scene.add(cube);

  //   // render the scene
  //   renderer.render(scene, camera);

  // add directional lighting
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // animate cube
  function render(time) {
    time *= 0.001; // convert time into seconds
    // cube.rotation.x = time;
    // cube.rotation.y = time;

    // give each cube a different rotation
    cubes.forEach((cube, index) => {
      const speed = 1 + index * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
