import logo from './logo.svg';
export default function Header(props) {  

  return (
    <div id='cabecera'>
          <img width={200} src={logo} className="logo" alt="logo" />
           <h3 className='mensaje'>Bienvenido a la página de Javier Montesinos Marti</h3> 
        </div>)
};
        