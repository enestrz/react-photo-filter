import React,{useState} from 'react'
import Range from '../component/Range'
import photo1 from '../photos/photo1.jpg'

const PhotoFilterPage = () => {
    
    const [grayScale, setGrayScale] = useState(0);
    const [contrast, setContrast] = useState(100);
    const [brightness, setBrightness] = useState(100);
    const [hueRotate, setHueRotate] = useState(0);
    const [saturate, setSaturate] = useState(100);
    const [sepia, setSepia] = useState(0);

    const grayScaleValue = (e) => {
        setGrayScale(e.target.value)
    }
    const contrastValue = (e) => {
        setContrast(e.target.value)
    }
    const brightnessValue = (e) => {
        setBrightness(e.target.value)
    }
    const hueRotateValue = (e) => {
        setHueRotate(e.target.value)
    }
    const saturateValue = (e) => {
        setSaturate(e.target.value)
    }
    const sepiaValue = (e) => {
        setSepia(e.target.value)
    }

    const photoStyle = {
        filter : `grayscale(${grayScale}%) 
                  contrast(${contrast}%)
                  brightness(${brightness}%)
                  hue-rotate(${hueRotate}deg)
                  saturate(${saturate}%)
                  sepia(${sepia}%)`,
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 ">
                    <img src={photo1} style={photoStyle} alt="Example" className="img-fluid" />
                </div>
                <div className="col-md-4 ">
                    <Range name="Grayscale" min="0" max="100"  value={grayScale} func={grayScaleValue}/>
                    <Range name="Contrast" min="0" max="100"  value={contrast} func={contrastValue}/>
                    <Range name="Brightness" min="0" max="200"  value={brightness} func={brightnessValue}/>
                    <Range name="Hue-Rotate" min="0" max="360"  value={hueRotate} func={hueRotateValue}/>
                    <Range name="Saturate" min="0" max="200"  value={saturate} func={saturateValue}/>
                    <Range name="Sepia" min="0" max="100"  value={sepia} func={sepiaValue}/>
                </div>            
            </div>
        </div>
    )
}

export default PhotoFilterPage
