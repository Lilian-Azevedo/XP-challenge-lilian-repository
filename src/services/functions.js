export const convertedValue = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));

export const generateId = () => Math.floor(Date.now() * Math.random());

export const formatDate = (date) => ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 