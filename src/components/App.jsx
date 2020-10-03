import React, {useState} from "react";
import ReactDom from "react-dom";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";
//import {ufo} from '../images/ufo.obj';
//import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';

function App(){
    // === THREE.JS CODE START ===
    console.log("test");
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 500 );
    var renderer = new THREE.WebGLRenderer();
    
    //renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( 550, 550 );
    document.body.appendChild( renderer.domElement );
    
    const loader = new THREE.TextureLoader();
    const bgTexture = loader.load('./images/winter_sky.jpg');
    scene.background = bgTexture;
    scene.background = new THREE.Color(0x649DC1);
    scene.background = new THREE.Color(0x024873);
    
    scene.background = new THREE.Color(0x023859);
    
    
    //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    //var material = new THREE.MeshBasicMaterial( { color: 0x33FAFF, wireframe: true } );
    //var cube = new THREE.Mesh( geometry, material );
    //scene.add( cube );
    camera.position.z = 8;
    camera.position.y = 2;
    
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    var geometry_tree1 = new THREE.ConeBufferGeometry( 0.5, 1, 16 );
    var geometry_tree2 = new THREE.ConeBufferGeometry( 0.5, 2, 16 );
    var geometry_tree3 = new THREE.ConeBufferGeometry( 0.5, 1.5, 16 );
    var material_green1 = new THREE.MeshBasicMaterial( { color: 0x184C25} );
    var material_green2 = new THREE.MeshBasicMaterial( { color: 0x287438} );
    var material_green3 = new THREE.MeshBasicMaterial( { color: 0x3BB358} );
    var material_green4 = new THREE.MeshBasicMaterial( { color: 0x216632} );

    var tree1 = new THREE.Mesh( geometry_tree1, material_green1 );
    tree1.position.set(2, 0, 1)
    scene.add( tree1 );
    var tree2 = new THREE.Mesh( geometry_tree1, material_green2 );
    tree2.position.set(-3, 0, 2)
    scene.add( tree2 );
    var tree3 = new THREE.Mesh( geometry_tree1, material_green3 );
    tree3.position.set(-5, 0, -1)
    scene.add( tree3 );
    var tree4 = new THREE.Mesh( geometry_tree1, material_green4 );
    tree4.position.set(-5, 0, -2)
    scene.add( tree4 );
    var tree5 = new THREE.Mesh( geometry_tree2, material_green3 );
    tree5.position.set(-6, 0, -1)
    scene.add( tree5 );
    var tree6 = new THREE.Mesh( geometry_tree3, material_green1 );
    tree6.position.set(-4, 0, -1)
    scene.add( tree6 );

    var tree7 = new THREE.Mesh( geometry_tree1, material_green4 );
    tree7.position.set(4, 0, 2)
    scene.add( tree7 );
    var tree8 = new THREE.Mesh( geometry_tree2, material_green2 );
    tree8.position.set(2.5, 0, 3)
    scene.add( tree8 );
    var tree9 = new THREE.Mesh( geometry_tree3, material_green1 );
    tree9.position.set(2, 0, 3)
    scene.add( tree9 );

    var geometry_plane = new THREE.BoxGeometry( 50, 0.1, 40);  
    var texture_plane = THREE.ImageUtils.loadTexture('./images/snow.jpg', {}, function() {
    renderer.render(scene, camera);
    })
    var material_plane = new THREE.MeshBasicMaterial({map: texture_plane, transparent: true })
    var material_plane = new THREE.MeshBasicMaterial({ color: 0xE3EAF4})
    var plane = new THREE.Mesh(geometry_plane, material_plane );
    plane.position.set(0, -1, 0)
    scene.add( plane );

    var material_mountain1 = new THREE.MeshBasicMaterial({color: 0xBFCDD9});
    var geometry_mountain1 = new THREE.OctahedronGeometry(5, 0);
    var material_mountain2 = new THREE.MeshBasicMaterial({color: 0x8A7F7E});
    var geometry_mountain2 = new THREE.OctahedronGeometry(3, 0);
    var material_mountain3 = new THREE.MeshBasicMaterial({color: 0x8AA6BF});
    var geometry_mountain3 = new THREE.OctahedronGeometry(4, 0);
    
    var mountain1 = new THREE.Mesh(geometry_mountain1, material_mountain1);
    mountain1.position.set(25, -1, -20);
    scene.add(mountain1);
    var mountain2 = new THREE.Mesh(geometry_mountain2, material_mountain2);
    mountain2.position.set(20, -1, -20);
    scene.add(mountain2);

    var mountain3 = new THREE.Mesh(geometry_mountain1, material_mountain1);
    mountain3.position.set(-20, -1, -17);
    scene.add(mountain3);
    var mountain4 = new THREE.Mesh(geometry_mountain1, material_mountain2);
    mountain4.position.set(-25, -1, -18);
    scene.add(mountain4);
    var mountain2 = new THREE.Mesh(geometry_mountain2, material_mountain3);
    mountain2.position.set(-21, -1, -13);
    scene.add(mountain2);

    var tree7 = new THREE.Mesh( geometry_tree1, material_green4 );
    tree7.position.set(18, 0, -10)
    scene.add( tree7 );
    var tree8 = new THREE.Mesh( geometry_tree2, material_green2 );
    tree8.position.set(17, 0, -10)
    scene.add( tree8 );
    var tree9 = new THREE.Mesh( geometry_tree3, material_green1 );
    tree9.position.set(16, 0, -10)
    scene.add( tree9 );

    var geometry_moon = new THREE.CircleBufferGeometry( 2.5, 15 );
    var material_moon = new THREE.MeshBasicMaterial( { color: 0x9AB1C2 } );
    var moon = new THREE.Mesh( geometry_moon, material_moon );
    moon.position.set(19, 12, -20)
    scene.add( moon );
    
    var geometry_star = new THREE.CircleBufferGeometry( 0.2, 10 );
    var geometry_star2 = new THREE.CircleBufferGeometry( 0.29, 10 );
    var material_star = new THREE.MeshBasicMaterial( { color: 0xFFF6E6 } );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(12, 10, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(11, 3, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(-11, 9, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(-7, 5, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(3, 15, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(9, 17, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(-25, 10, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(-28, 20, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(-14, 18, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(27, 6, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(28, 15, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star, material_star );
    star.position.set(23, 19, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star2, material_star );
    star.position.set(-23, 7, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star2, material_star );
    star.position.set(-11, 15, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star2, material_star );
    star.position.set(-5, 18, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star2, material_star );
    star.position.set(0, 4, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star2, material_star );
    star.position.set(2, 8, -20)
    scene.add( star );
    var star = new THREE.Mesh( geometry_star2, material_star );
    star.position.set(23, 13, -20)
    scene.add( star );
    
    
    //*/



    // var objLoader = new OBJLoader();
    // objLoader.setPath('./assets/');
    // objLoader.load('ufo.obj', function (object) {

    //     scene.add(object);
    //     //object.position.z -= 60;
    //     object.position.set(0, 0, -100);

    // });
    var mtlLoader = new MTLLoader();
    mtlLoader.setTexturePath('./assets/');
    mtlLoader.setPath('./assets/');
    mtlLoader.load('ufo.mtl', function (materials) {

        materials.preload();

        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('./assets/');
        objLoader.load('ufo.obj', function (ufo) {

            scene.add(ufo);
            //object.position.y -= 60;
            ufo.position.set(0, 0, -10);
            ufo.scale.set(0.1, 0.1, 0.1)
            var ufo_direction = 0;

            var animate_ufo = function () {
                requestAnimationFrame( animate_ufo );
                //cube.rotation.x += 0.01;
                //cube.rotation.y += 0.001;
                
                //cube.position.x += 0.01;
                if(ufo.position.y <= 1){
                    ufo_direction = 1;   
                } else if(ufo.position.y >= 5){
                    ufo_direction = -1;
                } else if (ufo.position.y >= 1 & ufo.position.y <= 5 & ufo_direction === 1) {
                    ufo_direction = 1;
                } else if (ufo.position.y >= 1 & ufo.position.y <= 5 & ufo_direction === -1) {
                    ufo_direction = -1;
                }

                if (ufo_direction === 1){
                    ufo.position.y += 0.01;
                    ufo.rotation.y += 0.02;
                } else if (ufo_direction === -1){
                    ufo.position.y -= 0.004;
                    ufo.rotation.y += 0.005;
                }
                
                
                renderer.render( scene, camera );
              };
              animate_ufo();

        });

    });

    
    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);

    var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);

    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    scene.add(keyLight);
    scene.add(fillLight);
    //scene.add(backLight);

    
    var animate = function () {
      requestAnimationFrame( animate );
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.001;

      //cube.position.x += 0.01;
      //ufo.position.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
    
    return (<div><h1>This is a Three JS Example</h1></div>)
}

export default App;
// return (<div>
//     <h1>Funcionando</h1>
// </div>)








