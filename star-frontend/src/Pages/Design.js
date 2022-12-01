import React from 'react'
import '../css/pages/Design.css'

const Design = () => {
  return (
    <div id='design-main-container'>
        <div className='section-container'>
            <div className='grid'>
                <div style={{"borderRight": "5px solid black"}}>
                    <h2 className='m-5'>Font-families</h2>
                    <h3 className='primary-ff'>Primary Font Family</h3>
                    <h3 className='secondary-ff'>Secondary Font Family</h3>
                    <h3 className='tertiary-ff'>Tertiary Font Family</h3>
                    <div>
                        <h1 className='m-10'>Colors:</h1>
                        <div>
                        <div className="color primary-red"><p>#FF0000</p></div>
                        <div className="color secondary-red"><p>#F40000</p></div>
                        <div className="color tertiary-red"><p>#E50000</p></div>
                        <div className="color primary-gray"><p>#808080</p></div>
                        <div className="color secondary-gray"><p>#A0A0A0</p></div>
                        <div className="color tertiary-gray"><p>#C0C0C0</p></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Font-sizes</h2>
                    <h3 className='fs-900'>FCCLA ROCKS - 900</h3>
                    <h3 className='fs-800'>FCCLA ROCKS - 800</h3>
                    <h3 className='fs-700'>FCCLA ROCKS - 700</h3>
                    <h3 className='fs-600'>FCCLA ROCKS - 600</h3>
                    <h3 className='fs-500'>FCCLA ROCKS - 500</h3>
                    <h3 className='fs-400'>FCCLA ROCKS - 400</h3>
                    <h3 className='fs-300'>FCCLA ROCKS - 300</h3>
                    <h3 className='fs-200'>FCCLA ROCKS - 200</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design