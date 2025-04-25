import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useRecipeType = () => {
    const queryClient = useQueryClient();

    const getRecipe = async (recipeName) => {
        try {
            const { data } = await queryClient.fetchQuery({
                queryKey: ['getData', 'recipeName', recipeName],
                queryFn: async () => await axios.get('/api/recipe/name?recipeName=' + recipeName),
            });            
            return data;
        } catch (error) {
            console.error('Error fetching recipe:', error);
            return undefined;
        }
    }

    return { getRecipe };
}