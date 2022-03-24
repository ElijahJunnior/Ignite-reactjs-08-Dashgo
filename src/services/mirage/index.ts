import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },
        factories: {
            user: Factory.extend({
                name() {
                    // usa a bibliotec faker para gerar o nome de usuario
                    return faker.name.findName();
                },
                email() {
                    // usa a bibliotec faker para gerar o email do usuario
                    return faker.internet.email().toLowerCase();
                },
                // ter definido o modelo com snake case e o 
                // factory com camel case não vai gerar problemas
                createdAt() {
                    // usa a bibliotec faker para gerar a data de criação do usuario
                    return faker.date.recent(10);
                }
            })
        },
        seeds(server) {
            // configura o mirage para criar 200 registros de user quando for iniciado
            server.createList("user", 200)
        },
        routes() {
            // raiz da url do mirage ex.: (localhost:3001/api/users)
            this.namespace = 'api';
            // Atrasa em x milesegundos a resposta da api 
            this.timing = 750;
            // CRUD de User
            this.get('/users')
            this.post('/users');
            this.put('/users');
            this.delete('/users');
            // resetando a name space para não interferir nas API do Next
            this.namespace = '';
            // encaminha as rotas que não foram encontradas para a API do Next
            this.passthrough();
        }
    })

    return server
}