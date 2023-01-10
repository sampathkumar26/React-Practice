import 'bulma/css/bulma.css'

import ProfileCard from './componets/ProfileCard'
import AlexaImg from './images/alexa.png'
import SiriImg from './images/siri.png'
import CortanaImg from './images/cortana.png'



function App() {
    return ( <div>
        <section class="hero is-primary">
  <div class="hero-body">
    <p class="title has-text-centered">
    Personal Digital Assistances
    </p>
  </div>
</section>

        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg } />
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImg }/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Siri" handle="@siri01" image={SiriImg }/>
                    </div>
                </div>
            </section>
        </div>
    </div> );
};

export default App;