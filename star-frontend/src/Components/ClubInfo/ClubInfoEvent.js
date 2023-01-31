import React from 'react'
import '../../css/pages/ClubInfo.css'

const ClubInfoEvent = ({data}) => {
console.log(data)
  return (
    <div className='center-div'>
        
        {/* div */}
        <div className='trivia-content-div'>

            {/* careerPathways */}
            <div className='ClubInfo-sub-div'>
              <h2>Career Pathways</h2>
              <p className='ClubInfo-content'>{data.careerPathways}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8A3SoiKtSFpumHRtY3OmXDVzGmf5TIZoGFmhL-AlJB2YrWgxY0t7XwazKzw1s6nhzR6J8nIQeRX7dss1VWaHcsfcb1HpQx1NNmlt4G3dJgAXEBK2i2GHfrdPK5SVxfRblzsENvG7lb1VlKqStsygiFy=w956-h717-no?authuser=0'/>
            </div>

            {/* chapterTheme */}
            <div className='ClubInfo-sub-div'>
              <h2>Chapter Theme</h2>
              <p className='ClubInfo-content'>{data.chapterTheme}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8DJwxtu33tGNPMKqHxlc28IlZ1lmLrQOsBU0Q49lwLlzeZrWO4ywBNRxSuHHWQBfL5fHbAvqpq93WOcOSGbj42VlMxCmlGLYkNqPVwt_1QpSZbRjVcOjUgIW8EzoWHorvPNPzMGMPbb7BoadFRFsayF=w797-h598-no?authuser=0'/>
            </div>

            {/* colorsAndDefinitions */}
            <div className='ClubInfo-sub-div'>
              <h2>Colors and definitions</h2>
              <p className='ClubInfo-content'>{data.colorsAndDefinitions}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8ADIy2v-2Li4DonCSFwCiG2O7QZ77N28NfuPkuZc8HqF_X51UR6a4yoMUr0tGel9XCKjb4I6ANphfyHCqwa4h2hDvgrcZbBKW-lVKlDl8hlRrvP-zztg9memQ3FetTyhGcH9LZbkn7jXytibU2B1jL-=w797-h598-no?authuser=0'/>
            </div>

            {/* dosAndDonts */}
            <div className='ClubInfo-sub-div'>
              <h2>Do's and Do-not's</h2>
              <p className='ClubInfo-content'>{data.dosAndDonts}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8Cs-C8qsN7Tu8XXptb3BbLYaKOibtKgvBP-udosEdZVtsI2v04HGHyUMKGCnLTHZNwnn5uIwvAJJrlS6iLZBVYxOg3OzCjTZaZE7iv6acRCDVqoWCeSBBQyww1RsCJpFK8at2HlUlUME3nGLv_2QvfT=w660-h879-no?authuser=0'/>
            </div>

            {/* flower */}
            <div className='ClubInfo-sub-div'>
              <h2>FCCLA Flower</h2>
              <p className='ClubInfo-content'>{data.flower}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8B0qNApU5Db7P6xGKtas7fn28Ib-7p5h6iZS8aQDIGkWFn3235WfrEd5oVI2TN7jtpXeKuhEs_6gjSreCg_enKflfq-KKbV1pcdeoLiAG9bqr11YCyL7LghuXhQoQHtYG8ur7iw-k-T6krHfK43MtmN=s797-no?authuser=0'/>
            </div>

            {/* motto */}
            <div className='ClubInfo-sub-div'>
              <h2>Motto</h2>
              <p className='ClubInfo-content'>{data.motto}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8ANpvXn1CVNyEWl7uzRuaqITNSZcItUaENTHIPjScAMmIXgnDGm2hdyUzp0sJNfaOA9gg7Sk7SJ3Uk-LqhmkjQiGL141Ih-_XFM46j2Z-vcEPu-fStAOjH6TETKMxmdrwV-S6xOmt170mgfqoKX8o-9=w797-h449-no?authuser=0'/>
            </div>

            {/* nationalPrograms */}
            <div className='ClubInfo-sub-div'>
              <h2>National Programs</h2>
              <p className='ClubInfo-content'>{data.nationalPrograms}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8AYk5Kc7FxpHDfu7XQar3pDW1XHKMhfXKbo0VFSk8aowSXxr2wSezgjS-8g793L3Ssf6XsNnSogp7Vc_L4S1I_aMnksWsH7a9b_f8nsV9aPufexN2p_XOX8yhjDQKzDwGd1PHlSu1Q_FUCk6HPSIqdN=w797-h449-no?authuser=0'/>
            </div>

            {/* nationalTheme */}
            <div className='ClubInfo-sub-div'>
              <h2>National Theme</h2>
              <p className='ClubInfo-content'>{data.nationalTheme}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8Al89uDKUUfkgheMPj1oJ-Vv3STr-vlP81JrCWBrhJO8EoGJahmTp3YKW02C2ONcVwtUVBMrjjaTeObpnlJDJHPrSKy-rWF_pVAhHrRonuJNlPUY-7ouJYBJ4b8ALOSRHi87u03sCA11w0-DRKAfAYa=w797-h669-no?authuser=0'/>
            </div>

            {/* stateTheme */}
            <div className='ClubInfo-sub-div'>
              <h2>State Theme</h2>
              <p className='ClubInfo-content'>{data.stateTheme}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8DvvfSlZzYcHKhJzIo-OJXmLkTmKA_PrisbaoyYNYrKQp93RQOr_LPEwmeDr7bR1yU3JnQGmlBSmGDD0p0wlnm3pjJM6POsyYoD0VjI4kICrOlgbfMhb1PRehuHfVCx3Ajve5UcFusIR63e6InGPd6F=w797-h449-no?authuser=0'/>
            </div>

            {/* tagLine */}
            <div className='ClubInfo-sub-div'>
              <h2>Tag line</h2>
              <p className='ClubInfo-content'>{data.tagLine}</p>
              <img className='ClubInfo-img' src='https://lh3.googleusercontent.com/pw/AMWts8Ameoyz_3HE-lyv3NcT5zdZM5maDEJlzcEjw1RVOIcNQVJ5tlG3Lc9ivNVglISxnHwJJhHyMSxac3Cs3DDHw2C0_UK5AqGfvedAtnnjs3lsIE4V3LX4VQZC9IZ7-xckmF44_YoNx_NRLL2N_nemHX-s=w797-h598-no?authuser=0'/>
            </div>

            {/* creed */}
            <div className='ClubInfo-sub-div'>
              <h2 className='ClubInfo-header'>Creed</h2>
              <h3 className='ClubInfo-content'>{data.creed}</h3>
            </div>
            
        </div>
    </div>
  )
}

export default ClubInfoEvent