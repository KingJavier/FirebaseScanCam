//Intertface de Usuario

export interface User{
  uid: string;
  documento: string;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  password: string;
  rol: 'seguridad'|'invitado'|'aprendiz'|'funcionario'|'gestor';
  estado: boolean;
}
