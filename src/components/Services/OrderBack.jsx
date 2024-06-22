import axios from "axios";

const ORDER_URL = 'http://localhost:8080/api/v1/orders';

class OrderBack{
    
    getAllOrders(){
        return axios.get(ORDER_URL);
    }
    // updateStaffById(){
    //     return axios.put(ORDER_URL+'/'+orderId,order);
    // }
}
export default new OrderBack();