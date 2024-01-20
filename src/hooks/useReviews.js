import { useQuery } from "@tanstack/react-query";

const useReviews = () => {

    const { data: reviews = [], isLoading, error } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://doc-house-server-rust.vercel.app/reviews');
            const data = await res.json();
            return data;
        }
    })

    return [reviews, isLoading, error];
};

export default useReviews;