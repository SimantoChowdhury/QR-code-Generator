const user_name=document.querySelector('.user_name');
const user_email=document.querySelector('.user_email');
const user_phone=document.querySelector('.user_phone');


const generateButton=document.querySelector('.generate-qr-code-button');


const loader=document.querySelector('.loader');
const qrImage=document.querySelector('.qr-image');


generateButton.onclick= async () => {
    let userNameValue=user_name.value;
    let userEmailValue=user_email.value;
    let userPhoneValue=user_phone.value;


    let allValues=`${userNameValue} ${userEmailValue} ${userPhoneValue}`;
    loader.style.display='block';
    if(userNameValue.length==0||userEmailValue.length==0||userPhoneValue.length==0){
        alert('Enter valid things');
        loader.style.display='none';

    }else{
        let imageSource=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${allValues}`;
        let data=await fetch(imageSource);
        let response= await data.blob();
        let url =URL.createObjectURL(response);
        qrImage.src = url;
        loader.style.display='none';
    }

}