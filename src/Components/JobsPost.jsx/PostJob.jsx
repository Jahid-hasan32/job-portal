import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable';

const PostJob = () => {
    const [selectOption, setSelectOption] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        data.skills = selectOption;
        console.log(data)
    }

    const options = [
        { value: "Python", label: "Python" },
        { value: "Django", label: "Django" },
        { value: "DRF", label: "DRF" },
        { value: "CSS", label: "CSS" },
        { value: "Tailwind", label: "Tailwind" },
        { value: "Postgrees", label: "Postgrees" },
    ]


    return (
        <div className='bg-third_color px-4 xl:p-0'>
            <div className='max-w-7xl p-4 container'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex flex-col lg:flex-row justify-between gap-x-6 border'>

                        {/* 1st columnn */}
                        <div className='flex-1'>

                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Job title</label>
                                <input type="text" placeholder="Ex: web developer" {...register("jobTitle",
                                    { required: true })} className='create-job-input' />
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Min salary</label>
                                <input type="number" placeholder="$ 40000,50000 " {...register("minPrice",
                                    { required: true })} className='create-job-input' />
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Salary type</label>
                                <select {...register("salaryType", { required: true })} className='create-job-input px-2'>
                                    <option value=""></option>
                                    <option value="Yearly">Yearly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Weekly">Weekly</option>
                                </select>
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Job posting date</label>
                                <input type="date" placeholder="2023-11-31 " {...register("postingDate",
                                    { required: true })} className='create-job-input px-2' />
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Company logo</label>
                                <input type="file" accept='image/*' {...register("companyLogo",
                                    { required: true })} className='create-job-input' />
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Posted by</label>
                                <input type="email" placeholder="example@gmail.com" {...register("PostedBy",
                                    { required: true })} className='create-job-input' />
                            </div>

                        </div>

                        {/* 2nd column */}
                        <div className='flex-1'>

                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Company Name</label>
                                <input type="text" placeholder="Ex: Microsoft, Google" {...register("companyName",
                                    { required: true })} className='create-job-input' />
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Max salary</label>
                                <input type="number" placeholder="$ 80000, 100000" {...register("maxPrice",
                                    { required: true })} className='create-job-input' />
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>job location</label>
                                <input type="text" placeholder="Delhi, Kabul, Dhaka, London" {...register("jobLocation",
                                    { required: true })} className='create-job-input' />
                            </div>
                            <div className='w-full mt-4'>
                                <label className='block mb-2 text-lg'>Experience level</label>
                                <select {...register("experienceLevel", { required: true })} className='create-job-input'>
                                    <option value="">Choose your experience</option>
                                    <option value="Internship">Intership</option>
                                    <option value="Good">Good</option>
                                    <option value="Expart">Expart</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Any experience">Any experience</option>
                                </select>
                            </div>
                            <div className='w-full mt-4 py-2'>
                                <label className='block mb-2 text-lg'>Employment type</label>
                                <select {...register("employmentType", { required: true })} className='create-job-input'>
                                    <option value="">Choose Employment type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Temporary">Temporary</option>
                                    <option value="Part-time">Part-time</option>
                                </select>
                            </div>
                            <div className='w-full mt-4'>
                                <label>Required skills:</label>
                                <CreatableSelect
                                    className='create-job-input p-2'
                                    isMulti
                                    defaultValue={selectOption}
                                    onChange={setSelectOption}
                                    options={options}
                                />
                            </div>

                        </div>

                    </div>

                        {/* out of two column.  */}
                    <div className='w-full mt-4'>
                        <label>Job description</label>
                        <textarea name="desc" id="desc" cols="20" rows="5"
                            placeholder='Job description'
                            className='w-full p-2 outline-none focus:ring-2 focus:ring-secondery'
                            {...register("employmentType", { required: true })} />
                    </div>
                    <input type="submit" className='bg-secondery py-2 px-6 text-white font-bold tracking-widest mt-4 cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default PostJob