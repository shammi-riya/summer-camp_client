import { useQuery } from "@tanstack/react-query";


const useClass = () => {

   const {data: topClass = [], isLoading: loading, refetch}  = useQuery({
    // queryKey: ['topClass'],
    queryFn: async() => {
        const res = await fetch('https://summer-camp-surver.vercel.app/class');
       
        return res.json();
    }
   })



    return [topClass,loading,refetch]

};


export default useClass;