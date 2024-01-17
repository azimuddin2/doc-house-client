import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.admin) {
                        setIsAdmin(data.admin);
                        setIsAdminLoading(false);
                    }
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading];
}

export default useAdmin;