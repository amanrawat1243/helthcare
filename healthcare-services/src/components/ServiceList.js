import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, deleteService, setCurrentService }) => {
  return (
    <ul>
      {services.map((service) => (
        <ServiceItem 
          key={service.id} 
          service={service} 
          deleteService={deleteService} 
          setCurrentService={setCurrentService} 
        />
      ))}
    </ul>
  );
};

export default ServiceList;
