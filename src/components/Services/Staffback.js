import axios from "axios";

const STAFF_REST_API_URL = 'http://localhost:8080/api/v1/staffs'


class StaffBack{
    getAllStaff(){
        return axios.get(STAFF_REST_API_URL)
    }

    createStaff(staffs){
        return axios.post(STAFF_REST_API_URL,staffs)
    }
    getStaffById(staffsId)
    {
        return axios.get(STAFF_REST_API_URL+ '/'+staffsId)
    }
    updateStaffById(staffsId,staff){
        return axios.put(STAFF_REST_API_URL+'/'+staffsId,staff);
    }
    deleteStaffById(staffsId)
    {
        return axios.delete(STAFF_REST_API_URL+'/'+staffsId);
    }
}
export default new StaffBack()