import React, { useEffect } from 'react'
import './index.css'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
    const gltf = useLoader(GLTFLoader, './voxel_lucky_cat/scene.gltf')
    const pi = Math.PI;
    useEffect(() => {
        gltf.scene.scale.set(2, 2, 2)
        gltf.scene.rotateX((pi / 180) * 15)
        
    })

    return (
        <primitive object={gltf.scene}/>
    )
}

export default Model