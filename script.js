// Importa a biblioteca THREE.js
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// Crie uma cena do Three.JS
const scene = new THREE.Scene();

// Crie uma nova câmera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(280, 80, 500); // De frente ao modelo

// Renderizador
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

// Variáveis globais
let object;
let objToRender = 'hello_kitty'; // Nome do modelo

// Carregador GLTF
const loader = new GLTFLoader();
loader.load(
  `./models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.traverse(function(child) {
      if (child.isMesh) {
        child.rotation.set(0, 3.5, 0);
      }
    });
    object.position.set(550, 180, -300); // Ajuste conforme necessário
    object.rotation.set(0, Math.PI, 0);
    object.scale.set(1, 1, 1);
    scene.add(object);
    updateObjectScale();
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% carregado');
  },
  function (error) {
    console.error(error);
  }
);