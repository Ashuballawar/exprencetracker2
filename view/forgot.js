

form=document.getElementById('form-forgot')


form.addEventListener('submit',async function(e){
    e.preventDefault();
    let userDetail={
        Email:e.target.email.value
    }
  
    let response=await axios.post('http://13.234.67.196:4000/password/forgotpassword',userDetail)
    console.log(response)
   
    document.body.innerHTML=response.data.link
})