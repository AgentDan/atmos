import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {
    Box,
    OrbitControls,
    PerspectiveCamera,
    SpotLight,
    useGLTF
} from "@react-three/drei";

const Proba = () => {
    const boxRef = useRef()
    const {nodes, materials} = useGLTF("./models/stena.glb")

    // useEffect(() => {
        // boxRef.current.position.set(30,3,3)
        // console.log(boxRef.current.position)
    // }, []);

    return (
        <>
            <SpotLight position={[0,1,0]} lookAt={[5,2,7]}/>
            <PerspectiveCamera
                ref={boxRef}
                position={[2,2,20]}
                makeDefault
            />
            {/*<OrbitControls/>*/}
            <mesh
                geometry={nodes.stena.geometry}
                material={materials.stena}
            />
            <Box  >
                <meshStandardMaterial
                    color={"green"}
                />
            </Box>
        </>
    );
};

export default Proba;