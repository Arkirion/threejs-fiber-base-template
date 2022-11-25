import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
export const App = () => {
  const dom = useRef<HTMLElement>(null)
  const test = () => {
    console.log('asd')
  }
  return (
    <>
      <main className="app" ref={dom}>
        <section className='hero'>
          <h1>Title</h1>
          <h3 className='allowEvents' onClick={test}>Subtitle</h3>
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

