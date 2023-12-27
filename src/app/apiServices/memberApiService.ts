import { serverApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";

class MemberApiService {
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }

    public async loginRequest(login_data: any) {
        try {
            const result = await axios.post(this.path + "/login", login_data,
                {
                    withCredentials: true
                });
            console.log("state:", result.data.sate);
            assert.ok(result.data, Definer.general_err2);
            assert.ok(result?.data.state != "fail", result?.data.message);

            const member: Member = result.data.data;
            localStorage.setItem("member_data", JSON.stringify(member));
            return member
        } catch (err: any) {
            console.log(`ERROR:: loginRequest ${err.message}`);
            throw err;
        }
    }
}

export default MemberApiService;