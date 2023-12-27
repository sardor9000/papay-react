import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { serverApi } from "../../lib/config";
import { ProductSearchObj } from "../../types/others";
import { Product } from "../../types/product";

class ProductApiService {
    private readonly path: string;
    constructor() {
        this.path = serverApi;
        
    }

    async getTargetdProducts(data: ProductSearchObj) {
        try {
            const url = '/products',
                result = await axios.post(this.path + url, data, {
                    withCredentials: true,
                });
            assert.ok(result, Definer.general_err1)
            const products: Product[] = result.data.data;
            return products;
        } catch (err: any) {
            console.log(`ERROR::: getTrendProducts ${err.message}`);
            throw err;
        }
    }
}

export default ProductApiService;