import React from 'react'

function Input({type = 'text', id, title, name, value, onChange,errors,onBlur,touched}) {
    console.log(touched)
    return (
        <>
            <div className="input-group- mb-3 ">
                <label htmlFor={id}>{title} </label>
                
                <input type={type} className='form-control' name={name} id={id} value={value} onChange={onChange} onBlur={onBlur}  />
                {touched[name]&& errors[name]&&<p className='text text-danger px-1 '>{errors[name]}</p>}
                {/* بقدر ارسل الاسم باي اسم بدي ياه ف اتربيوت كومبونين الانبوت بس لما بدي احط لاله قيمة ف تاغ الانبوت بنجبر احط انه اسمه يساوي الاسم الي سميته ياه ياه بالكومبونيت */}
                
            </div>

        </>
    )
}

export default Input
// 