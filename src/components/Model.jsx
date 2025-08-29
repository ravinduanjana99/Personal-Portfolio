import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Laptop(props) {
  const group = useRef();
  const { scene } = useGLTF("/laptop.glb");

  const targetRotation = new THREE.Vector2();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (targetRotation.x - group.current.rotation.y) * 0.01;
    group.current.rotation.x += (targetRotation.y - group.current.rotation.x) * 0.2;
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

     
      targetRotation.x = x * 0.2; 
      targetRotation.y = y * 0.01; 
    };

    const handleMouseLeave = () => {
      targetRotation.set(0, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.5}
      {...props}
    />
  );
}

useGLTF.preload("/laptop.glb");
