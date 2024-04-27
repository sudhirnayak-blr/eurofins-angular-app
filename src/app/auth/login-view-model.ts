export class LoginViewModel {
    username: string="";
    password: string = "";

    constructor( ) { }

    public get Username() : string { 
        return this.username 
    }
    public set Username(value: string) { 
        this.username = value; 
    }
    public get Password() : string { 
        return this.password;
    }
    public set Password(value: string) { 
        this.password = value;
    }
}


