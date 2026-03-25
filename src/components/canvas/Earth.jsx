import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Sphere, MeshDistortMaterial } from "@react-three/drei";


const Earth = () => {
    // Replacing GLTF with a stylized Sphere since we don't have the GLTF file locally
    // A wireframe sphere looks very cyber/futuristic
    return (
        <Sphere args={[1, 32, 32]} scale={2.5}>
            <meshStandardMaterial
                color="#4c1d95" // violet-800
                emissive="#1e1b4b" // indigo-950
                wireframe
                transparent
                opacity={0.8}
            />
        </Sphere>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={1} />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
