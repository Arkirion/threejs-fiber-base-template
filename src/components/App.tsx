import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
export const App = () => {
  const dom = useRef<HTMLElement>(null)
  return (
    <>
      <main className="app" ref={dom}>
        <section className='hero'>
          <h1>Web 3D Workshop</h1>
          <h3>Por Emanuel Lorenzo - @emalorenzo_</h3>
        </section>
      </main>
      <Canvas className="canvas">
        <OrbitControls />
        <Environment preset="sunset"/>
        <ambientLight intensity={2}/>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="hotpink"/>
        </mesh>
      </Canvas>
    </>
  )
}

export default App
