import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React, { useRef } from 'react'

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows 
      position={[0, 0, -0.14]} 
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={2}
        intensity={0.85}
        ambient={0.25}
        position={[5, 5, -5]}
      />
      <RandomizedLight
        amount={3}
        radius={5}
        intensity={0.75}
        ambient={0.25}
        position={[-5, 5, 8]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop