import React, { useState } from 'react';

const ServiceForm = ({ addService, currentService, updateService, clearCurrent }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  React.useEffect(() => {
    if (currentService) {
      setFormData(currentService);
    } else {
      setFormData({ name: '', description: '', price: '' });
    }
  }, [currentService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentService) {
      updateService(formData);
    } else {
      addService(formData);
    }
    clearCurrent();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Service Name"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <button type="submit">{currentService ? 'Update Service' : 'Add Service'}</button>
      {currentService && <button type="button" onClick={clearCurrent}>Cancel</button>}
    </form>
  );
};

export default ServiceForm;
