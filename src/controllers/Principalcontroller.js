var nodemailer = require('nodemailer');
const principalcontroller = {};

principalcontroller.principal_controller = (req, res) => {
    
        res.render('index.html');
   
   
}

principalcontroller.mesagetocontact_controller = (req, res)=> {
        
                        
                var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                        user: 'leone.vitrub.uni@gmail.com',
                        pass: 'vitrubman@leones123456789'
                }
                });
                
                // configura los datos del correo
                var mailOptions = {
                from: "MaestroPeru <leone.vitrub.uni@gmail.com>",
                to: 'uni.ramos.telecomun@gmail.com',
                subject: 'Urgente!!! Cliente',
                text: 'Hola Mundo',
                html: '<b>Hola Mundo</b>'
                };
                
                // Envía el correo con el objeto de transporte definido anteriormente
                transporter.sendMail(mailOptions, function(error, info){
                if(error){
                        return console.log(error);
                }
                
                console.log('Mensaje enviado: ' + info.response);
                });
                        
}
module.exports = principalcontroller;