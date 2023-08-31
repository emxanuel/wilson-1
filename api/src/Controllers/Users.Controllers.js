import * as UsersServices from "../Services/Users.Services.js"
import bodyParser from "body-parser";

export const getUsers = (req, res) => {
    UsersServices.getUsers().then((result) => {
        res.status(200).json({
         
          data: result[0],
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

  export const ELogin = (req, res) => {
  
    let  Nombre  = req.body.Nombre; 
    let Pass = req.body.Pass;// Desestructurar req.body para obtener Nombre y Pass
    
    // Verificar si Nombre y Pass están presentes y no son cadenas vacías
    console.log (Nombre,Pass);
    UsersServices.ELogin(Nombre, Pass)
      .then((result) => {
        res.status(200).json({
          data: result[0],
        });
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  };

  export const comprueba = (req, res) => {
  
    let  Nombre  = req.body.Nombre; 

    // Verificar si Nombre y Pass están presentes y no son cadenas vacías
    console.log (Nombre);
    UsersServices.comprueba(Nombre)
      .then((result) => {
        res.status(200).json({
          data: result[0],
        });
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  };


  export const SingUp = (req, res) => {
  
    let  Nombre  = req.body.Nombre; 
    let Pass = req.body.Pass;// 
    let Email= req.body.Email;// 
    
    // Verificar si Nombre y Pass están presentes y no son cadenas vacías
    console.log (Nombre,Email,Pass);
    UsersServices.SingUp(Nombre,Email,Pass)
      .then(() => {
        res.status(200).json({
          data: Nombre,Email,Pass
        });
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  };
  
