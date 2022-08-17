import difusorAuto from '../images/DifusorAuto.jpeg'
import difusorVarillas from '../images/difusorVarillas.jpeg'
import homeSpray330 from '../images/HomeSpray330.jpeg'
import homeSpray500 from '../images/HomeSpray500.jpeg'
import jabonExfoliante from '../images/jabon exfoliante.jpeg'
import bombones from '../images/jabonBombonx7.jpeg'
import packVelas from '../images/PackVelasNoche.jpeg'
import perlas from '../images/PerlasAromaticas.jpeg'
import sales from '../images/SalesBaño.jpeg'
import velaSoja from '../images/VelaSoja.jpeg'

export const arrayProducts = [ 
    {   
        id: 1,
        title: "Difusor de Auto",
        price: 700,
        category: "Aromas",
        img: difusorAuto,
        description: 'Los "MINI" difusores son como los meses: asi como llegan, se van! Recorda que sirven para auto y/o placard, y que son personalizados con la fragancia que mas te agrada.',
        stock: 7,
    }, 
    {
        id: 2,
        title: "Difusor de Varillas",
        price: 1300,
        category: "Aromas",
        img: difusorVarillas,
        description: "Son los que hacen de tu espacio un lugar especial. Nosotros te recomendamos utilizarlo en lugares como el baño o una habitacion. Podes escoger el aroma que mas te guste! ",
        stock: 5,
    }, 
    {
        id: 3,
        title: "Home Spray 330ml",
        price: 860,
        category: "Aroma",
        img: homeSpray330,
        description: "Nuestro Home Spray está pensado para que puedas darle a tus espacios, ese toque especial que le hace falta. Recorda que podes elegir el aroma que mas te guste!",
        stock: 6,
    }, 
    {
        id: 4,
        title: "Home Spray 500ml",
        price: 1100,
        category: "Aroma",
        img: homeSpray500,
        description: "Nuestro Home Spray está pensado para que puedas darle a tus espacios, ese toque especial que le hace falta. Recorda que podes elegir el aroma que mas te guste!",
        stock: 9,
    }, 
    {
        id: 5,
        title: "Jabón exfoliante orgánico x unidad",
        price: 499,
        category: "Aroma",
        img: jabonExfoliante,
        description: "Son jabones artesanales , 100% ORGÁNICOS y hechos con productos totalmente naturales!. Para su elaboración se utiliza glicerina vegetal, la mayoria contiene aceite de coco y de almendras.",
        stock: 10,
    }, 
    {
        id: 6,
        title: "Bombones aromáticos Caja x7",
        price: 790,
        category: "Aroma",
        img: bombones,
        description: "Ideales para hornito. En lugar de colocar agua y escencia, pones uno o dos bombones, encendes debajo la velita y a disfrutar del más rico aroma!!",
        stock: 56,
    }, 
    {
        id: 7,
        title: "Pack velas de noche x4",
        price: 300,
        category: "Aroma",
        img: packVelas,
        description: "Las que necesitas esas noches en las que buscas tranquilidad y paz. Ideales para lograr una luz tenue y un espacio relajado. El pack incluye 4 unidades, pero podes seleccionar la cantidad que necesites! No pierdas la oportunidad de decorar tus espacios de la mejor manera",
        stock: 40,
    }, 
    {
        id: 8,
        title: "Perlas Aromáticas 75gr",
        price: 640,
        category: "Aroma",
        img: perlas,
        description: "Son bolitas de cerámica bizcochada, que se aromatizan con escencias naturales puras. Son espectaculares para aromatizar espacios de guardado. Incluso te digo, para dejar en el auto!",
        stock: 15,
    }, 
    {
        id: 9,
        title: "Sales de Baño",
        price: 590,
        category: "Aroma",
        img: sales,
        description: "Sales indicadas para una buena ducha que te relaje como vos te mereces!",
        stock: 9,
    }, 
    {
        id: 10,
        title: "Velas de cera de Soja",
        price: 890,
        category: "Aroma",
        img: velaSoja,
        description: "Velas hechas a base de cera de soja! Super aromaticas y naturales. Ideales para tus espacios mas intimos! Si buscas algo elegante, te recomendamos nuestras velas de cera de soja!",
        stock: 7,
    },
];

export default arrayProducts;