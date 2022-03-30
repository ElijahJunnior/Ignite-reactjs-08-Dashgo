import { createServer, Factory, Model, Response } from 'miragejs';
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
            // CRUD de User - Sobrecarregado para suportar paginação
            this.get('/users', function (schema, request) {
                // pega os parametros passados via query 
                const { page = 1, per_page = 10 } = request.queryParams;
                // pega a quantidade total de registros da entidade do consumo
                const total = schema.all('user').length;
                // calcula o primeiro registro 
                const pageStart = (Number(page) - 1) * Number(per_page);
                // calcula o ultimo registro
                const pageEnd = pageStart + Number(per_page);
                // pega a lista do usuarios do mirage e corta ela para fazer a paginação
                const users = this.serialize(schema.all('user'))
                    .users.slice(pageStart, pageEnd);
                // retorna o resultado da consulta 
                return new Response(
                    // codigo de status da cunsulta 
                    200,
                    // adiciona headers a resposta
                    // por boa pratica deve se adicionar oque não é o objetivo da consulta por header
                    // informa ao usuario a quantidade total de registros
                    { 'x-total-count': String(total) },
                    // objeto retornado no body da consulta 
                    users
                )

            })
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