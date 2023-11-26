import { MeshRefractionMaterial, MeshTransmissionMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React from 'react'
import { RGBELoader } from 'three-stdlib'
import * as THREE from 'three'
import { useControls } from 'leva'

export const Prisma = () => {
   /*  const texture = useLoader(THREE.TextureLoader, './images/small_empty_room_4_1k.hdr')
    console.log(texture)
    texture.mapping = THREE.EquirectangularReflectionMapping
    console.log(texture)
 */
    const { distortion, thickness, anisotropy, chromaticAberration } = useControls({ 
        distortion:  {
          value: 0.1,
          min: 0.01,
          max: 1,
          step: 0.01
        }, 
        thickness: {
          value: 0.5,
          min: 0.01,
          max: 5,
          step: 0.1
         },
         anisotropy: {
            value: 5,
            min: 1,
            max: 10,
            step: 1
          },
          chromaticAberration: {
            value: 0.1,
            min: 0.01,
            max: 1,
            step: 0.01
          } 
        })

  return (
    <mesh castShadow receiveShadow position={[0, 0.2, 0]} rotation={[-Math.PI / 2,0,0]} >
 
    <cylinderGeometry args={[0.5, 0.5, 1, 3]} />
  <MeshTransmissionMaterial
      resolution={1024}  
      distortion={distortion} 
      color="white" 
      thickness={thickness} 
      anisotropy={anisotropy} 
      chromaticAberration={chromaticAberration} 
    /> 
{/*     <MeshRefractionMaterial 
      envMap={texture}
      resolution={1024}  
      distortion={distortion} 
      color="white" 
      thickness={thickness} 
      anisotropy={anisotropy} 
      chromaticAberration={chromaticAberration} /> */}
  </mesh>
  )
}
