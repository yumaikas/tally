import {h} from 'preact';
import {useState, useEffect} from 'preact/hooks';
import {Link} from 'preact-router/match';

export function MedicationTable(props) {

}

export function MedicationDisplay(props) {
    let [meds, setMeds] = useState(null);

    useEffect(() => {
        fetch("/api/v1/medications")
            .then(resp => resp.json())
            .then(data => console.log(data));
    }, []);
    return (<div>
        <h2>Medications</h2>
        <Link href="/">(home)</Link>
        { (meds ? <MedicationTable medications={meds}/> : null) }
    </div>);
}

