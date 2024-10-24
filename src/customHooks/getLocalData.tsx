export const useGetRole = (key:string) => {
 const data = localStorage.getItem(key)
 return data 
};
