import React from 'react';

const ServiceItem = ({ service, deleteService, setCurrentService }) => {
  return (
    <li>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <button onClick={() => setCurrentService(service)}>Edit</button>
      <button onClick={() => deleteService(service.id)}>Delete</button>
    </li>
  );
};

export default ServiceItem;
