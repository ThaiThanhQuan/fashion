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
    avatar: string
    created_at: string
    active: boolean
    roles: IRole[]
}

export interface IRole {
    id: string
    name: string
    description: string
}