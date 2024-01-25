import { useState, useEffect } from 'react'
import initialstate from './assets/initialState.js'
import downloadIcon from './assets/icon_download.svg'

import SetPersonals from './components/SetPersonals.jsx'
import SetSkills from './components/SetSkills.jsx'
import SetDivers from './components/SetDivers.jsx'
import SetProfessionals from './components/SetProfessionals.jsx'
import SetAcademics from './components/SetAcademics.jsx'
import SetBackgroundColors from './components/SetBackgroundColors.jsx'
import SetAbout from './components/SetAbout.jsx'
import SetPicture from './components/SetPicture.jsx'

import GetAcademics from './components/GetAcademics.jsx'
import GetProfessionals from './components/GetProfessionals.jsx'
import GetSkills from './components/GetSkills.jsx'

import './styles/App.css'

function App() {
  let nextid = 0;

  const storedState = JSON.parse(localStorage.getItem('state'));
  const [state, setState] = useState(storedState ?? initialstate);
  useEffect(() => localStorage.setItem('state', JSON.stringify(state) ), [state]);

  return (
    <>
      <main>
        <div id='getters'>
          <h1>Resume builder</h1>
          <div id='curriculumVitae'>
            <aside style={{ background: `linear-gradient(${state.colors[0]}, ${state.colors[1]})` }}>
              <div id='picture'>
                <img src={state.picture} alt='profile picture'></img>
              </div>
              <div id='contacts'>
                <h3>Contacts</h3>
                <p>{state.personals.location}</p>
                <p>{state.personals.email}</p>
                <p>{state.personals.phoneNumber}</p>
                <p>{state.personals.website}</p>
              </div>
              <div id='divers'>
                <h3>Divers</h3>
                {state.divers.map(item =>
                  <p key={nextid++}>{item}</p>
                )}
              </div>
            </aside>
            <div id='notAside'>
              <h2 id='title'>{state.personals.title}</h2>
              <h3 id='subtitle'>{state.personals.subtitle}</h3>
              <h3>About</h3>
              <p id='about'>{state.about}</p>
              < GetSkills state={state} nextid={nextid} />
              < GetProfessionals state={state} nextid={nextid} />
              < GetAcademics state={state} nextid={nextid} />
            </div>
          </div>
          <footer>
            <p>by <a href='https://Capeya.me'>Capeya</a></p>
          </footer>
        </div>
        <div id='setters'>
          < SetPicture state={state} setState={setState} />
          < SetBackgroundColors state={state} setState={setState} />
          < SetPersonals state={state} setState={setState} />
          < SetAbout state={state} setState={setState} />
          < SetSkills state={state} setState={setState} />
          < SetProfessionals state={state} setState={setState} />
          < SetAcademics state={state} setState={setState} />
          < SetDivers state={state} setState={setState} />
          <button id='download' onClick={() => { window.print() }}>
            <img
              src={downloadIcon} alt='Download icon'>
            </img>
            Download
          </button>
        </div>
      </main>
    </>
  )
}

export default App
