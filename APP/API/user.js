import apiClien from './clien'
const getAll= async ()=>{
    try{
        const response = await apiClien.get('/user')
    }catch(e){
        console.log('err', e)
    }
}