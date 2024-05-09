import { ArticleModel } from "../models/articleModel";
import { UserModel } from "../models/userModel";
import bcrypt from 'bcrypt';

const dataBase = async () => {
    // Registros de artículos
    const articles = [
        {
            type: 'Caja de cambios',
            brand: 'ZF',
            model: '1',
            year: '2010',
            condition: 'usado',
            description: 'Funcionando correctamente',
            images: ['#'],
            price: '200000',
            status: 'active'
        },
        {
            type: 'Diferencial',
            brand: 'ZF',
            model: '3',
            year: '2014',
            condition: 'usado',
            description: 'Funcionando correctamente',
            images: ['#'],
            price: '300000',
            status: 'active'
        },
        {
            type: 'Caja de dirección',
            brand: 'ZF',
            model: '5',
            year: '2019',
            condition: 'usado',
            description: 'Funcionando correctamente',
            images: ['#'],
            price: '200000',
            status: 'active'
        },
        {
            type: 'Caja de cambios',
            brand: 'ZF',
            model: '2',
            year: '2011',
            condition: 'usado',
            description: 'Funcionando correctamente',
            images: ['#'],
            price: '220000',
            status: 'active'
        },
        {
            type: 'Capot',
            brand: 'Mercedes Benz',
            model: 'A200',
            year: '2010',
            condition: 'usado',
            description: 'Sin pintura',
            images: ['#'],
            price: '200000',
            status: 'active'
        },
    ];

    const insertedArticles: any = await ArticleModel.bulkCreate(articles);

    const users = [
        {
            firstName: 'Jorge',
            lastName: 'Acosta',
            dni: '23616110',
            // birthDate,
            phone: '2646730581',
            email: 'jorgeacostadeleon@yahoo.com',
            password: '123456',
            active: true,
            role: 'user',
        },
    ];

    const hashedUsers = await Promise.all(users.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        return {
            ...user,
            password: hash
        };
    }));

    const insertedUsers: any = await UserModel.bulkCreate(hashedUsers);

    // console.log("Registros de artículo insertados correctamente:", insertedArticles);
    // console.log("Registros de locaciones insertados correctamente:", insertedLocations);
    // console.log("Registros de movimientos insertados correctamente:", insertedInventoryMovements);
};

export default dataBase;



























// import { ArticleModel } from "../models/articleModel";
// import { UserModel } from "../models/userModel";


// const dataBase = async () => {

//     // Registros de artículos
//     const articles = [
//         {
//             type: 'Caja de cambios',
//             brand: 'ZF',
//             model: '1',
//             year: '2010',
//             contition: 'usado',
//             description: 'Funcionando correctamente',
//             image: '#',
//             price: '200000',
//             status: true
//         },
//         {
//             type: 'Diferencial',
//             brand: 'ZF',
//             model: '3',
//             year: '2014',
//             contition: 'usado',
//             description: 'Funcionando correctamente',
//             image: '#',
//             price: '300000',
//             status: true
//         },
//         {
//             type: 'Caja de dirección',
//             brand: 'ZF',
//             model: '5',
//             year: '2019',
//             contition: 'usado',
//             description: 'Funcionando correctamente',
//             image: '#',
//             price: '200000',
//             status: true
//         },
//         {
//             type: 'Caja de cambios',
//             brand: 'ZF',
//             model: '2',
//             year: '2011',
//             contition: 'usado',
//             description: 'Funcionando correctamente',
//             image: '#',
//             price: '220000',
//             status: true
//         },
//         {
//             type: 'Capot',
//             brand: 'Mercedes Benz',
//             model: 'A200',
//             year: '2010',
//             contition: 'usado',
//             description: 'Sin pintura',
//             image: '#',
//             price: '200000',
//             status: true
//         },
//     ];

//     const insertedArticles:any = await ArticleModel.bulkCreate(articles);

//     const users = [
//         {
//             firstName: 'Jorge',
//             lastName: 'Acosta',
//             dni: '23616110',
//             // birthDate,
//             phone: '2646730581',
//             email: 'jorgeacostadeleon@yahoo.com',
//             password: '123456',
//             active: true,
//             role: 'user',
//         },
//     ]


//     const insertedUsers:any = await UserModel.bulkCreate(users);
    

//     // Inventory
      
//     // console.log("Registros de artículo insertados correctamente:", insertedArticles);
//     // console.log("Registros de locaciones insertados correctamente:", insertedLocations);
//     // console.log("Registros de movimientos insertados correctamente:", insertedInventoryMovements);

// };

// export default dataBase;
