
// give a file
export async function uploadFile(file) {


     const formData = new FormData();
     formData.append("file", file);
     formData.append('upload_preset', 'infoBlogs');

     const response = await fetch(process.env.NEXT_PUBLIC_API_URL_CLOUDNARY, {
          method: "POST",
          body: formData,
     });
     
     const data = await response.json();
     return data?.secure_url;

}