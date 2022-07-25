
import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/DisplayEntries/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 178, date: '12-25-2021'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntry={addNewEntry} />
      <EntriesChartTracker parentEntries={entries}/>
    </div>
  );
}

export default App;

// example under thead above
/* <tbody>
          <tr>
            <td>1</td>
            <td>175</td>
            <td>11-23-2021</td>
          </tr>
        </tbody> */