import { Environment, OrbitControls, SpotLight } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import { Prisma } from './Prisma'

function App() {
  const ref = useRef()  
  const refTarget1 = useRef()
  const refTarget2 = useRef()
  const refTarget3 = useRef()
  const refTarget4 = useRef()



  return (
    <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 45 }}  style={{ width: '100vw', height: '100vh' }}>
      <color attach="background" args={['#333']} />
      <ambientLight intensity={0.5} />
    {/*   <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}

<SpotLight 
    color="yellow"
    position={[0,0.34,0]} 
    target={refTarget4.current}
    distance={1} 
    attenuation={1}
    radiusTop={0.05} 
    radiusBottom={0.2} 
    castShadow
    />
    <mesh ref={refTarget4} position={[2,-0.1,0]} >
      <sphereGeometry args={[0.1,64,64]} />
      <meshStandardMaterial color="red" transparent opacity={1} />  
   </mesh>


  <SpotLight 
    color="red"
    position={[0,0.34,0]} 
    target={refTarget2.current}
    distance={1} 
    attenuation={1}
    radiusTop={0.05} 
    radiusBottom={0.2} 
    castShadow
    />
    <mesh ref={refTarget2} position={[2,0,0]} >
      <sphereGeometry args={[0.1,64,64]} />
      <meshStandardMaterial color="red" transparent opacity={1} />  
   </mesh>

   <SpotLight 
    color="blue"
    position={[0,0.34,0]} 
    target={refTarget3.current}
    distance={1} 
    attenuation={1}
    radiusTop={0.05} 
    radiusBottom={0.2} 
    castShadow
    />
    <mesh ref={refTarget3} position={[2,-0.2,0]} >
      <sphereGeometry args={[0.1,64,64]} />
      <meshStandardMaterial color="red" transparent opacity={1} />  
   </mesh>


   <SpotLight 
    color="white"
    position={[-1,0.1,0]} 
    target={refTarget1.current}
    distance={1} 
    radiusTop={0.05} 
    radiusBottom={0.05} 
    castShadow
    />
   <mesh ref={refTarget1} position={[2,0.75,0]} >
      <sphereGeometry args={[0.1,64,64]} />
      <meshStandardMaterial color="red" transparent opacity={0} />  
   </mesh> 
     
     <Prisma />
   
    <mesh receiveShadow castShadow position={[0, -0.001, 0]} rotation={[-Math.PI / 2,0,0]} >
      <planeGeometry args={[100,100]} />
      <meshBasicMaterial color="#333" />
    </mesh>
 
     <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" /> 
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    
    </Canvas>
  )
}

export default App
