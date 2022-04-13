import { Injectable } from "@nestjs/common";
import { ISignAuthPayload, ISignAuthResponse } from "@trynka/shared/data-access/interfaces";

@Injectable()
export class AuthService {

    login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {

        return
        // {
        //     accessToken: //jwt
        //     expiresIn: // jwt
        //     id: //user-service
        // }
    }
}