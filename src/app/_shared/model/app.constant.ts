export enum SERVERCONFIG {
BACKEND = "BACKEND"
}

export class AuthUser{
  token:string;
  email:string;
  first_name:string;
  last_name:string;
  username:string;
}

export class DisplayToast{
  status:string;
  detail:string;
}