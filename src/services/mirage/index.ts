import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        // informa o modelo das entidades usadas nas rotas
        models: {
            user: Model.extend<Partial<User>>({})
        },
        // cria dados iniciais em massa para serem usados nas rotas
        factories: {
            user: Factory.extend({
                // usa o indice para criar diversos usuarios numerados
                name(i: number) {
                    return `User ${i + 1}`;
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                // ter definido o modelo com snake case e o 
                // factory com camel case não vai gerar problemas
                createdAt() {
                    return faker.date.recent(10);
                }
            })
        },
        routes() {
            // raiz da url do mirage ex.: (localhost:3001/api/users)
            this.namespace = 'api';
            // Atrasa em x milesegundos a resposta da api 
            this.timing = 750;
            // CRUD de User
            this.get('/users');
            this.post('/users');
            this.put('/users');
            this.delete('/users');
            // resetando a name space para não interferir nas API do Next
            this.namespace = 'api';
            // encaminha as rotas que não foram encontradas para a API do Next
            this.passthrough();
        }
    })
}