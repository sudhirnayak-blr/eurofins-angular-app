export class AuthenticationResponseModel { 

    constructor( 
        public userId: number, 
        public fullName: string, 
        public token : string
    ) { 
        
    }
}