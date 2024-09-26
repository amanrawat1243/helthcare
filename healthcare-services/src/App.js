import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import './App.css';

const App = () => {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const clearCurrent = () => {
    setCurrentService(null);
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        currentService={currentService}
        updateService={updateService}
        clearCurrent={clearCurrent}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        setCurrentService={setCurrentService}
      />
    </div>
  );
};

export default App;
