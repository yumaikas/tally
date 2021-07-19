import {h, render} from 'preact';
import {Router} from 'preact-router';
import {Link} from 'preact-router/match';
import {createHashHistory} from 'history';

import {MedicationDisplay} from "./medications";
import {ConditionsDisplay} from "./conditions";

function Home(props) {
    return <div>
        <h2>MediTally</h2>
        <h3><Link href="/meds">Medications</Link></h3>
        <h3><Link href="/conditions">Conditions</Link></h3>
        </div>;
}

export function TallyApp(props) {
    return <Router history={createHashHistory()}>
            <Home path="/"/>
            <MedicationDisplay path="/meds"/>
            <ConditionsDisplay path="/conditions"/>
        </Router>;
}
