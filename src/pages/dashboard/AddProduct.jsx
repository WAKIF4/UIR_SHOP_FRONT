import React, { useState } from 'react'
import Input from '../../components/global/Input'
import Button from '../../components/global/Button'
import axios from 'axios'
import Alert from '../../components/global/Alert'
import { useLocation, useNavigate } from 'react-router-dom'
import BackButton from '../../components/global/BackButton'
import {Cloudinary} from "@cloudinary/url-gen";
import HandleUpload from '../../components/global/Upload'
import toBase from '../../components/global/Upload'


function AddPdt() {
    const [file,setFile] = useState()
    const [user, setUser] = useState({
        id: "",
        ref: "",
        nbview: 1,
        name: pro,
        price: 0,
        images: "",
        quantity: 0,
        sousCategorie: {
            id: 0,
        },
        studentDto: {
            id: 0,
            fullname: "",
            phonenumber: "",
            email: "",
            biography: "",
            image: "",
            instagram: "",
            facebook: "",
            tiktok: "",
        },
    });
    const navigate = useNavigate()

    const [loading,setLoading] = useState(false)


    const [error,setError] = useState()


    const addUser = async () => {
        try {
          if (!user.fullname.match(pattern.fullname) || !user.phonenumber.match(pattern.phonenumber) || !user.email.match(pattern.email)) {
            console.error("error");
            return setError("Please enter valid fields");
          }
      
          setLoading(true);
      
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = async () => {
            try {
              // Upload the file to Cloudinary
              const cloudinaryResponse = await axios.post(import.meta.env.VITE_API_BASE_URL + "/upload", {
                file: reader.result,
                upload_preset: "upload_Hahaha",
              });

              console.log(cloudinaryResponse.data.url)
      
              setUser({ ...user, image: cloudinaryResponse.data.url });
      
              const addUserResponse = await axios.post(import.meta.env.VITE_API_URL + "students", {
                fullname: user.fullname,
                phonenumber: user.phonenumber,
                email: user.email,
                biography: user.biography,
                image: cloudinaryResponse.data.url,
                instagram: user.instagram,
                facebook: user.facebook,
                tiktok: user.tiktok,
              });
      
              // Redirect to the dashboard if successful
              navigate("/dashboard/users");
            } catch (error) {
              console.error(error);
              setError("Error adding user");
            } finally {
              setLoading(false);
            }
          };
        } catch (error) {
          console.error(error);
          setError("Error validating fields");
        }
      };
      

    if (loading) {
        return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-700'>Loading</h1>
        </div>
        )
    }
  return (
    <div className=''>
        <h1 className='text-2xl font-bold text-gray-700'>Add Users</h1>
        <BackButton />
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto p-4'>
            <Input type={"email"} label={"Email"} id={"email"} placeholder={"Email"} name={"email"} value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
            <Input type={"text"} label={"Full Name"} id={"fullname"} placeholder={"Full Name"} name={"fullname"} value={user.fullname} onChange={(e)=>setUser({...user,fullname:e.target.value})} />
            <Input type={"text"} label={"Phone Number"} id={"phonenumber"} placeholder={"Phone Number"} name={"phonenumber"} value={user.phonenumber} onChange={(e)=>setUser({...user,phonenumber:e.target.value})} />
            <Input type={"text"} label={"Biography"} id={"biography"} placeholder={"Biography"} name={"biography"} value={user.biography} onChange={(e)=>setUser({...user,biography:e.target.value})} />
            <Input
                type={"file"}
                label={"Image"}
                id={"file"}
                placeholder={"Image"}
                name={"image"}
                onChange={(
                    e)=>setFile(e.target.files[0]
                        )}
                />
            <Input type={"text"} label={"Instagram"} id={"instagram"} placeholder={"Instagram"} name={"instagram"} value={user.instagram} onChange={(e)=>setUser({...user,instagram:e.target.value})} />
            <Input type={"text"} label={"Facebook"} id={"facebook"} placeholder={"Facebook"} name={"facebook"} value={user.facebook} onChange={(e)=>setUser({...user,facebook:e.target.value})} />
            <Input type={"text"} label={"Tiktok"} id={"tiktok"} placeholder={"Tiktok"} name={"tiktok"} value={user.tiktok} onChange={(e)=>setUser({...user,tiktok:e.target.value})} />
            <Button text={"Save"} className={"bg-uir text-white px-4 py-2 w-full  hover:bg-uir-l duration-300"} onClick={addUser} />
        </div>
       {error && <div className=" max-w-2xl mx-auto p-4">
            <Alert type={"error"} text={error}  />
        </div>}
    </div>
  )
}

export default AddPdt




 
 
 
 
 
 
 
 
