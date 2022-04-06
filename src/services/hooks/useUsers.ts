import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

export type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

type GetUsersResponse = {
    totalCount: number,
    users: User[]
}

// função que acessa o webservice e busca os dados
export async function getUsers(page: number): Promise<GetUsersResponse> {
    // usando o axios para consumir uma lista de users 
    const { data, headers } = await api.get('users', {
        params: {
            page
        }
    });
    // pegando o tatal de registros no reader da resposta do consumo
    const totalCount = Number(headers['x-total-count'])
    // tratando dados do usuario
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
                day: "2-digit",
                month: "long",
                year: "numeric"
            })
        }
    })
    // retornado o resultado para o react query
    return {
        users,
        totalCount
    };
}

// funcão que usa o react query para gerenciar os dados 
// export function useUsers(page: number, options: UseQueryOptions) {
export function useUsers(page: number) {

    // return useQuery(['users', page], () => getUsers(page), {
    //     staleTime: 1000 * 60 * 10, // 10 Minutos
    //     ...options
    // })

    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 60 * 10, // 10 Minutos
    })

}