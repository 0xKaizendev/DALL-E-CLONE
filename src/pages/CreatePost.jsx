import React, { useState } from "react";
import {
  styles,
  BsCardImage,
  Loader,
  FormField,
} from "../index.js";
import { IconContext } from "react-icons";
import { generatePrompt } from "../utils/index.js";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector,  } from 'react-redux'
const CreatePost = () => {
    const langage = useSelector((state) => state.langage.value)
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", image: "" });
  const [generating, setGnerating] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit =async (event) => {
      event.preventDefault()
      if(form.prompt && form.name && form.image){
        setLoading(true)
        try {
         const request = await axios.post('http://localhost:8080/api/v1/post',{...form})
         if(request.status===200){
          navigate('/')
         }
        } catch (error) {
          alert(error)
        }

      } else {
        alert("Veuillez saisir une commande un nom et générer une image avant de partager")
      }

  };
  const handleChange = (e) => {
    console.log();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSuprisePrompt = () => {
    const ramdomPrompt = generatePrompt(form.prompt,langage.lang);
    setForm({ ...form, prompt: ramdomPrompt });
  };
  const generateImage = async () => {
    if (form.prompt ) {
      try {
        setGnerating(true);
        const response = await axios.post( "http://localhost:8080/api/v1/dalle/generate",{ prompt: form.prompt })
        const data =   response.data
        setForm({...form,image:`data:image/jpeg;base64,${data.photo}`})
      } catch (error) {
        alert(error)
      } finally{
        setGnerating(false)
      }
    } else{
        alert('Please enter a prompt')
    }
  };
  return (
    <section className="max-w-7xl mx-auto  px-3">
      <div>
        <h1 className={`font-extrabold text-white text-2xl mt-5`}>{langage.create_header}</h1>
        <p className={`${styles.text_body}`}>
        {langage.create_title}
        </p>
      </div>
      <form action="" className="my-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName={langage.create_form_name_name}
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName={langage.create_form_prompt}
            type="text"
            name="prompt"
            placeholder={langage.create_form_surprise_placeholder}
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurprisePrompt={handleSuprisePrompt}
            surpriseLabel = {langage.create_form_surprise}
          />
          <div className="relative  border bg-gray-50 border-gray-300 text-primary text-sm rounded-lg focus:ring-primary focus:border-primary w-64 p-3 h-64 flex items-center justify-center">
            {form.image ? (
              <img
                src={form.image}
                alt={form.prompt}
                className="w-full object-contain h-full"
              />
            ) : (
              <IconContext.Provider
                value={{ size: "100%", className: "opacity-40" }}
              >
                <BsCardImage className="" />
              </IconContext.Provider>
            )}
            {generating && (
              <div className="absolute inset-0 z-0 flex items-center justify-center ">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className=" gap-5 mt-5 ">
          <button
            type="button"
            onClick={generateImage}
            className=" bg-green-700 rounded-md px-5 py-2.5 font-medium text-sm w-full sm:w-2/4"
          >
            {generating ? langage.create_generate_button.generating : langage.create_generate_button.generate}
          </button>
        </div>
        <div className="mt-5 text-sm">
          <p>
    {langage.create_indication}
          </p>
        </div>
        <button
          type="submit"
          className="bg-primary rounded-md mt-3 px-5 py-2.5 font-medium text-sm w-full sm:w-2/4"
        >
          {loading ? langage.create_share_button.sharing: langage.create_share_button.share}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
