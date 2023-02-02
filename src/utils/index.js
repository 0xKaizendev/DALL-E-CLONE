
import FileSaver from 'file-saver'
import { frenchPrompts,englishPrompts } from "../index.js";
export const generatePrompt = (lastPrompt,lang) => {
  let randomPrompt
  if(lang==="Français"){
    let id = Math.floor(Math.random() * frenchPrompts.length);
    randomPrompt=frenchPrompts[id];
  } else{
    let id = Math.floor(Math.random() * englishPrompts.length);
    randomPrompt=englishPrompts[id];
  }

  if(randomPrompt===lastPrompt) return generatePrompt(lastPrompt,lang)
  return randomPrompt;
};


export const downloadImage =async(_id,image)=>{
  FileSaver.saveAs(image,`download-${_id}.jpg`)

}