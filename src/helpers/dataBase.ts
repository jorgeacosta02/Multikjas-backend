import { ArticleModel } from "../models/articleModel";
import { UserModel } from "../models/userModel";

const dataBase = async () => {

    // Registros de artículos
    const articles = [
        {
            name: 'Barra perf',
            brand: 'Sandivk',
            group1: 'T38',
            group2: '6m',
        },
        {
            name: 'Barra perf',
            brand: 'FRD',
            group1: 'T45',
            group2: '2m',
        },
        {
            name: 'Barra ini',
            brand: 'Sandvik',
            group1: 'T51',
            group2: '',
        },
        {
            name: 'Barra ini',
            brand: 'FRD',
            group1: 'T45',
            group2: '',
        },
        {
            name: 'Broca',
            brand: 'Sandvik',
            group1: 'T45',
            group2: 'Lisa',
        },
        {
            name: 'Broca',
            brand: 'Atlas',
            group1: 'T38',
            group2: 'Estriada',
        },
        {
            name: 'Fil aire',
            brand: 'filt',
            group1: 'x29',
            group2: 'www',
        },
      
    ];

    const insertedArticles:any = await ArticleModel.bulkCreate(articles);

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
    ]


    const insertedUsers:any = await UserModel.bulkCreate(users);
    

    // Inventory
      
    // console.log("Registros de artículo insertados correctamente:", insertedArticles);
    // console.log("Registros de locaciones insertados correctamente:", insertedLocations);
    // console.log("Registros de movimientos insertados correctamente:", insertedInventoryMovements);

};

export default dataBase;
