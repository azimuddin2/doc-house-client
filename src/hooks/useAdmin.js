import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user } = useAuth();

    const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('access-token')}`
                    }
                });
                const data = await res.json();
                return data.admin;
            }
        }
    })

    return [isAdmin, isAdminLoading];
}

export default useAdmin;