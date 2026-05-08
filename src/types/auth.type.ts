export interface IAuth {
    token: string
    refreshToken: string
}

export interface IUser {
    id: string
    username: string
    email: string
    dob: string      
    gender: boolean  
}