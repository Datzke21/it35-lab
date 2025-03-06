import React, { useState } from 'react';
import { IonItem, IonList, IonSearchbar } from '@ionic/react';

function SearchContainer() {
  const data = [
    'Bohol',
    'Cebu',
    'Phillips',
    'Dahilayan',
    'Korea',
    'China',
    'Japan',
    'Singapore',
    'New York',
    'Panama City',
  ];
  let [results, setResults] = useState([...data]);

  const handleInput = (event: Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
  };

  return (
    <>
      <IonSearchbar color="primary" placeholder="Primary"></IonSearchbar>

      <IonList>
        {results.map((result) => (
          <IonItem>{result}</IonItem>
        ))}
      </IonList>
    </>
  );
}
export default SearchContainer;