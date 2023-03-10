import axios from "axios";
import React, { useState } from "react";

function UploadPhoto() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("filedata", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "/upload/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }


    // отправка выбранного файла на сервер
  };

  return (
    <>
    {/* <form onSubmit={handleSubmit}>
      <label>
        Загрузить фото:
        <input type="file" onChange={handleFileInputChange} />
      </label>
      <button type="submit">Загрузить</button>
   </form>
   sefsdr */}
   <form action="/upload" method="post" enctype="multipart/form-data">
   <label>Добавить фото заказа:</label><br/>
   <input type="file" name="filedata" /><br/><br/>
   <input type="submit" value="Send" />
 </form>
 </>

  );
}

export default UploadPhoto;