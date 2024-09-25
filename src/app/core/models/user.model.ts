export interface User {
    id?: string;
    name?: string;
    lastName?: string;
    role?: Role;
    companies?: Company[];
}
export interface Role {
    id?: string;
    roleName?: string;
}
export interface Company {
    id?: string;
    companyName?: string;
}