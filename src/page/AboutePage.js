import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutePage = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate("/");
    }

    return (
        <>
            <h1>
                AboutePage!!
            </h1>
            <button onClick={goToHomepage}>Go to HomePage</button>
        </>
    )
}

export default AboutePage