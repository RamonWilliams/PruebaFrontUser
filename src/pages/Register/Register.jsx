import React from 'react'
import "./Register.css"
import { useForm } from "react-hook-form";
import { API } from "../.././services/API";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit,formState:{errors} } = useForm();
    let navigate = useNavigate();

    

    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("fullname", data.fullname);
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("email", data.email);
        formData.append("avatar", data.avatar[0]);
        formData.append("nationality", data.nationality);
        formData.append("location", data.location);
        formData.append("address", data.address);
        formData.append("phone", data.phone);
        formData.append("description", data.description);
        API.post("/user/register", formData).then((res) => {
            console.log(res)
            if (res) {
                navigate("/login");
             
            }


        })
    };




    return (
        <section className="registro">
            <form onSubmit={handleSubmit(formSubmit)} className="registrarse">
                <label htmlFor="fullname">Nombre completo:</label>
                <input type="text" id="fullname" name="fullname" placeholder="Nombre completo"  {...register("fullname",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                        
                    }                 
                })} />
                 {errors.fullname && <span>{errors.fullname.message}</span>} 

                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username"  placeholder="Nombre de usuario" {...register("username",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} />
                 {errors.username && <span>{errors.username.message}</span>} 

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  placeholder="escribe tu contraseña" {...register("password",{
                    required:{
                        value:true,
                        message:"La contraseña debe de tener al menos 6 caracteres",
                       
                    }                 
                })} />
                 {errors.password && <span>{errors.password.message}</span>} 



                 <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  placeholder="escribe tu email" {...register("email",{
                    required:{
                        value:true,
                        message:"El email debe ser válido",
                       
                    }                 
                })} />
                 {errors.email && <span>{errors.email.message}</span>} 



                <label htmlFor="avatar">Avatar:</label>
                <input type="file" id="avatar" name="avatar" placeholder="Sube tu avatar" {...register("avatar",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                        
                    }                 
                })} />
                 {errors.avatar && <span>{errors.avatar.message}</span>}

                <label htmlFor="nationality">Nacionalidad:</label>
                <input nationality="text" id="nationality" name="nationality"  placeholder="Nacionalidad" {...register("nationality",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} />
                 {errors.nationality && <span>{errors.nationality.message}</span>}

                <label htmlFor="location">Localidad:</label>
                <input type="text" id="location" name="location"  placeholder="Localidad"{...register("location",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} /> {errors.location && <span>{errors.location.message}</span>}


                <label htmlFor="address">Dirección:</label>
                <input type="text" id="address" name="address"  placeholder="Dirección"{...register("address",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} /> {errors.address && <span>{errors.address.message}</span>}


                <label htmlFor="phone">Teléfono:</label>
                <input type="text" id="phone" name="phone"  placeholder="Teléfono"{...register("phone",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} /> {errors.phone && <span>{errors.phone.message}</span>}


                <label htmlFor="description">Descripción :</label>
                <input type="text" id="description" name="description"  placeholder="Descripción "{...register("description",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} /> {errors.description && <span>{errors.description.message}</span>}
                

                <button type="submit" className="register-botton">Register</button>
            </form>
        </section>
    )
    
    

  
}

export default Register