import { useQuery } from "react-query";
import { api } from "../api";

export type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

// função que acessa o webservice e busca os dados
export async function getUsers(): Promise<User[]> {
    // usando o axios para consumir uma lista de users 
    const { data } = await api.get('users');
    // tratando dados do usuario
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: "2-digit",
                month: "long",
                year: "numeric"
            })
        }
    })
    // retornado o resultado para o react query
    return users;
}

// funcão que usa o react query para gerenciar os dados 
export function useUsers() {

    return useQuery('users', getUsers, {
        staleTime: 1000 * 5
    })

}