export const convertedValue = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));

export const generateId = () => Math.floor(Date.now() * Math.random());

export const formatDate = (date) => ((new Date(date).getDate() )) + "/" + ((new Date(date).getMonth() + 1)) + "/" + new Date(date).getFullYear();

export const transformToJSValue = (value) => {
    if (value.includes(',')) {
        let convert = value.toString().replace(",", ".");
        return convert;
    }
    return value;
}