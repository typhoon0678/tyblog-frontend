export interface TokenResponse {
    data: MemberData;
}

interface MemberData {
    email: string;
    username: string;
}