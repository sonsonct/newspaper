import apiClien from './clien'
const getAll= async ()=>{
    try{
        const response = await apiClien.get('/news')
    }catch(e){
        console.log('err', e)
    }
}