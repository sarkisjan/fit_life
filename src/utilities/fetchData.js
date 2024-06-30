// import { fetchData } from './api/index.js';
export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    console.log(data);
    return data;
}
export const exercisesOptions = {
    method: 'GET',
	headers: {
		'Content-Type': 'application/json' 
		
	}
};
// export const fetchData = async (url, options)=>{
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
// }
// export const exercisesOptions = {
//     method: 'GET',
// 	headers: {
// 		'Accept': 'application/json' ,
// 		// 'Authorization': 'Token e106ad6d59886858a1e7e81e68264cefaa712399'
// 	}
// };