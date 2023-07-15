import React from 'react'
import Image from './Images/design.jpeg'
import dev from './Images/dev.png'
import vatsal from './Images/vatsal.png'
import rutvi from './Images/rutvi.png'
import tanish from './Images/tanish.png'
import jenish from './Images/jenish.png'
import './About.css'
const About = () => {
  return (
    <>
      <div className="image">
        <img src={Image} alt="main"/>
    </div>
    <div className="text">
        <p className="lauren">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.</p>
        <table>
            <tr>
                <td className="td">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </td>
                <td>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </td>
            </tr>
        </table>
    </div>
    <center>
        <p className="t">Our Team</p>
        <table>
        <tr>
            <td align="center">
                <div className="peep">
                <img className="imgp" src={tanish} alt="dev"/>
                <i><h1>Tanish Patel</h1></i>
                <p className="para">Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Egestas congue quisque egestas diam. Sed viverra 
                ipsum nunc aliquet bibendum enim.</p>
                </div>
            </td>
            <td align="center">
                <div className="peep">
                <img className="imgp" src={jenish} alt="dev"/>
                <i><h1>Jenish Mistry</h1></i>
                <p className="para">Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Egestas congue quisque egestas diam. Sed viverra
                ipsum nunc aliquet bibendum enim.</p>
                </div>
            </td>
            <td align="center">
                <div className="peep">
                <img className="imgp" src={rutvi} alt="dev"/>
                <i><h1>Rutvi Shah</h1></i>
                <p className="para">Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Egestas congue quisque egestas diam. Sed viverra
                    ipsum nunc aliquet bibendum enim.</p>
                </div>
            </td>
            <td align="center">
                <div className="peep">
                <img className="imgp" src={dev} alt="dev"/>
                <i><h1>Dev Panchal</h1></i>
                <p className="para">Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Egestas congue quisque egestas diam. Sed viverra
                ipsum nunc aliquet bibendum enim.</p>
                </div>
            </td>
            <td align="center">
                <div className="peep">
                <img className="imgp" src={vatsal} alt="dev"/>
                <i><h1>Vatsal Balasra</h1></i>
                <p>Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Egestas congue quisque egestas diam. Sed viverra
                ipsum nunc aliquet bibendum enim.</p>
                </div>
            </td>
        </tr>
        </table>
    </center>
    </>
  )
}

export default About