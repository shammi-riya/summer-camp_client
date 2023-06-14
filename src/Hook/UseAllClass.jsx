import { useQuery } from "@tanstack/react-query";


const UseAllClass = () => {
    const {data: allClass = [], isLoading: loading, refetch}  = useQuery({
        queryKey: ['allClass'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-surver.vercel.app/allClass');
            
            return res.json();
        }
       })
    
    
    
        return [allClass,loading,refetch]
    
};

export default UseAllClass;