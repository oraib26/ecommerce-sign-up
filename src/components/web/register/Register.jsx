import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik'
import { registerschema } from '../validation/Validate.js'
import axios from 'axios'
import { toast } from 'react-toastify';


function Register() {
    const initialValues = {
        userName: '',//اكتبيهن نفس ما بده الباك اند
        email: '',
        password: '',
        image:'',

    }
    const handleFieldChange = (event) => {
        formik.setFieldValue('image', event.target.files[0])

    }
    

    const onSubmit = async users => {

        const formData = new FormData();
        formData.append("userName", users.userName)
        formData.append("email", users.email)
        formData.append("password", users.password)
        formData.append("image", users.image)

        const { data } = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`, formData)
      
        if (data.message == "success") {
            formik.resetForm();//افرغ الفورم لما بدي اجي اسجل من جديد 
           // console.log(formik)
        

            toast('account created successfully , please verify your e-mail to login'), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }


        }
       // console.log(data)
    }




    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: registerschema
    })
    const inputs = [ //داينمك 
        {
            id: 'username',
            type: 'text',
            name: 'userName',
            title: 'user name',
            value: formik.values.userName,

        },
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'user email',
            value: formik.values.email,

        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'user password',
            value: formik.values.password,

        },
        {
            id: 'image',
            type: 'file',
            name: 'image',
            title: 'user image',
            onChange: handleFieldChange// لما يصير تغيير عالانبوت ناديلي هالفنكشن
        },
        // الفاليو الي بتنحط جوا الانبوت احنا بنحطها 


    ]
   // console.log(formik.resetForm)

    const renderInputs = inputs.map((input, index) =>
        <Input type={input.type}
            id={input.id}
            name={input.name}
            title={input.title}
            key={index}
            onChange={input.onChange || formik.handleChange}//  اول شرط بشتغل مع الصورة اذا اصر تغيير عليها 
            onBlur={formik.handleBlur}// هون استدعينا الاون بلور والتاتشد عشان لما بدنا نسجل بالحقل يركز بالحقل نفسه لحد ما يخلصه وبعدها ينتقل عالحقل الثاني ويعمل اله فالييديت
            touched={formik.touched}
            errors={formik.errors} />
    )
    return (
        <>
            <div className="container pb-5 ">
                <h2 className='text-center mt-3'> ~ Create Account ~</h2>
                <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className='w-50 border p-2 m-auto bg-success-subtle rounded'>
                    {renderInputs}
                    <button type='submit' disabled={!formik.isValid} className='d-flex m-auto px-5'>register</button>
                </form>

            </div>


        </>
    )
}

export default Register