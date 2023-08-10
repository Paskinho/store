import {instance} from "../../common/api/common.api";

export const catalogApi = {
    getCatalog: ()=> {
        return instance.get('catalog')
    }

}