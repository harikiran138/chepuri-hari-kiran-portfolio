"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const Blob = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { mouse } = state;
    if (meshRef.current) {
      // Mouse interaction: Rotate the blob to follow the mouse
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 2.0, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 2.0, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.2}>
        <MeshDistortMaterial
          color="#111111" // Slightly lighter black for better reflection
          attach="material"
          distort={0.7} // More wobbly/liquid
          speed={4} // Faster animation for fluid look
          roughness={0.05} // Very shiny
          metalness={1.0} // Full metal
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transmission={0.3} // More glass-like
          thickness={1.5}
        />
      </Sphere>
    </Float>
  );
};

export default function ThreeBlob() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Environment preset="city" />
        {/* Ambient light for base visibility */}
        <ambientLight intensity={0.5} />
        {/* Directional light to show off the metalness */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Blob />
      </Canvas>
    </div>
  );
}
