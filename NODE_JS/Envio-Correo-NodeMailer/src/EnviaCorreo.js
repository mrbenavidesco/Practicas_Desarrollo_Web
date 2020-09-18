const Correo = require('nodemailer');

const TransporCorreo = Correo.createTransport({
   service:'gmail',
   auth:
        {user:'bancopruebanic@gmail.com',
         pass:'nic$1234'        
        }   
});

var Mensaje ='Estimado usuario, el siguiente es una prueba de envio de estado de cuentas por correo, favor hacer caso omiso. Cordial saludo';
var OpcionesCorreo =
                    {
                        from   :'Banco Nicaraguense<bancopruebanic@SpeechGrammarList.com>',
                        to     :'Cliente del Banco<mrbenavidesc@yandex.com>',
                        subject:'ESTADO DE CUENTA. PDF ADJUNTO',
                        text   :Mensaje ,
                       attachments : [
                                      {filename: 'EstadoCuenta.pdf',
                                       path   : './estados_cuenta/EstadoCuenta.pdf',
                                       contenType:'application/pdf'
                                      }
                                    ]
                                };
  
                    
TransporCorreo.sendMail(OpcionesCorreo,function(error,info)
{ if (error) 
    {
     console.log('Error al intentar enviar correo.' + error);   
    }else{
          console.log('Correo enviado con exito');
         }

}
);