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

  // create basic material for the box and set its colour
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // 6 digit hex colour values

  // create a mesh -- combination of geometry and material, and the position, orientation, and scale
  const cube = new THREE.Mesh(geometry, material);

  // add mesh to the scene
  scene.add(cube);

  //   // render the scene
  //   renderer.render(scene, camera);

  // animate cube
  function render(time) {
    time *= 0.001; // convert time into seconds
    cube.rotation.x = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
