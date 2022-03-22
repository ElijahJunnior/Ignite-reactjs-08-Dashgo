import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type Costumer = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            costumer: Model.extend<Partial<Costumer>>({})
        },
        factories: {
            costumer: Factory.extend({
                name() {
                    // usa a bibliotec faker para gerar o nome de usuario
                    // return faker.name.findName();
                    return 'elias'
                },
                email() {
                    // usa a bibliotec faker para gerar o email do usuario
                    // return faker.internet.email().toLowerCase();
                    return 'elias@email.com'
                },
                // ter definido o modelo com snake case e o 
                // factory com camel case não vai gerar problemas
                createdAt() {
                    return '03-22-2022'
                    // usa a bibliotec faker para gerar a data de criação do usuario
                    // return faker.date.recent(10);
                }
            })
        },
        seeds(server) {
            server.createList("costumer", 200)
        },
        routes() {
            this.namespace = 'api';
            this.get('/costumers')
            this.namespace = '';
            this.passthrough();
        }
    })

    // export function makeServer() {
    //     const server = createServer({
    //         // informa o modelo das entidades usadas nas rotas
    //         models: {
    //             costumer: Model.extend<Partial<Costumer>>({})
    //         },
    //         // cria dados iniciais em massa para serem usados nas rotas
    //         factories: {
    //             costumer: Factory.extend({
    //                 name() {
    //                     // usa a bibliotec faker para gerar o nome de usuario
    //                     // return faker.name.findName();
    //                     return 'elias'
    //                 },
    //                 email() {
    //                     // usa a bibliotec faker para gerar o email do usuario
    //                     // return faker.internet.email().toLowerCase();
    //                     return 'elias@email.com'
    //                 },
    //                 // ter definido o modelo com snake case e o 
    //                 // factory com camel case não vai gerar problemas
    //                 createdAt() {
    //                     return '03-22-2022'
    //                     // usa a bibliotec faker para gerar a data de criação do usuario
    //                     // return faker.date.recent(10);
    //                 }
    //             })
    //         },
    //         seeds(server) {
    //             server.createList("costumer", 200)
    //         },
    //         routes() {
    //             // raiz da url do mirage ex.: (localhost:3001/api/users)
    //             this.namespace = '';
    //             // Atrasa em x milesegundos a resposta da api 
    //             this.timing = 750;
    //             // CRUD de User
    //             this.get('/costumer');
    //             // this.post('/users');
    //             // this.put('/users');
    //             // this.delete('/users');
    //             // resetando a name space para não interferir nas API do Next
    //             // this.namespace = '';
    //             // encaminha as rotas que não foram encontradas para a API do Next
    //             // this.passthrough();
    //         }
    //     })


    return server
}