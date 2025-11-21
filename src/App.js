import React, { useState } from 'react';
import CartaDelDia from './CartaDelDia';
import MuseoDeFotos from './MuseoDeFotos';
import Acertijos from './Acertijos';
import BuzonMensajes from './BuzonMensajes';

const tabs = [
  { name: 'Carta del Día', component: <CartaDelDia /> },
  { name: 'Museo de Fotos', component: <MuseoDeFotos /> },
  { name: 'Acertijos', component: <Acertijos /> },
  { name: 'Buzón de Mensajes', component: <BuzonMensajes /> },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
      <h1>Para Mi Novia 💖</h1>
      <div className="tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            className={activeTab === idx ? 'active' : ''}
            onClick={() => setActiveTab(idx)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
}

export default App;
