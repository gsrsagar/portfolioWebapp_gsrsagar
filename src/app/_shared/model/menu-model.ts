import { MenuItem } from 'primeng/api';

export const items:MenuItem[]= [
    {
        label: 'Home',
        icon:'pi pi-fw pi-home',
        routerLink:'/home',
        routerLinkActiveOptions:'active',
        styleClass:'menupanel'
    },
    {
      label: 'Apps',
      icon:'pi pi-fw pi-briefcase',
      routerLink:'/products',
      styleClass:'menupanel'
  },
  {
      label: 'Profile',
      icon:'pi pi-fw pi-comments',
      routerLink:'#',
      styleClass:'menupanel'
  },
  {
      label: 'AboutUs',
      icon:'pi pi-fw pi-book',
      routerLink:'#',
      styleClass:'menupanel'
  }]