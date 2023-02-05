/*En este archivo al que he llamado data.js, he declarado una constante con un array de productos, el cual a la vez estoy exportando con la palabra reservada "export" de esa manera podré importarla desde el componente que así lo requiera*/

export const productList = [
  {
    name: 'Fernet 1L',
    price: 240,
    thumbnail:
      'https://www.brancastore.com.ar/142-thickbox_default/fernet-branca-450ml.jpg',
    stock: 7,
    description:
      '1845. Milán. En su primer laboratorio de la Porta Nuova, Bernardino Branca, un singular autodidacta, obtiene una bebida única producto  de la sabia combinación de hierbas, cortezas, raíces y frutos macerados en alcohol. Cuenta con un colaborador, el Dr. Fernet y Bernardino decide unir sus nombres para bautizar a su reciente creación. Nacía Fernet Branca. Con el tiempo se convertiría en un producto y una marca que trascendería las fronteras de Italia para expandirse  por el mundo. Hoy, la combinación de ingredientes naturales obtenidos en distintas partes del mundo, macerados en alcohol, respetando estrictamente un  proceso que lleva más de 160 años y que  culmina con una paciente maduración de 12 meses en cubas de roble de Eslavonia es el secreto de Fernet Branca y constituyen su espíritu único.',
    size: 'L',
    vendor: 'Fernet Branca',
    type: 'Clasico',
    id: 1,
  },
];
