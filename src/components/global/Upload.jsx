import axios from "axios"
const toBase = async(file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async() => {

      const res = await axios.post(import.meta.env.VITE_API_BASE_URL+"/upload",{
        file:reader.result,
        upload_preset: "upload_Hahaha",
      })
      .then(res => {
        console.log(res.data.url)
        return res.data.url
      }
      )
      .catch(err => {
        console.log(err)
      }
      )
    };


  };

export default toBase