import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FaCalendarAlt, FaRegComments } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { ImAttachment } from 'react-icons/im';
import { TbBrandDatabricks } from "react-icons/tb";
import Modal from './components/Modal';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  console.log('isopen', isOpen);

  const incompData = [1, 2, 3, 4, 5, 4, 7, 75, 3, 2, 5, 9]
  const todoData = [1, 2, 3, 4, 5, 4, 4, 4, 4, 4, 7, 75, 3, 2, 5, 9]


  const { data, isLoading, error } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const modalOpen = () => {

    setIsOpen(!isOpen)

  }




  return (
    <div className=' flex gap-7 mx-auto my-10 custom-scrollbar overflow-x-scroll max-w-[1240px]'>

      <div className='bg-gray-300 '>
        <div className=' flex items-center justify-between text-gray-700 px-3  w-[400px]'>
          <div className='flex h-14 items-center gap-1'>
            <p className='bg-red-500 h-5 w-5 rounded-s-full'></p>
            <h1 className='text-xl'>Incomplete</h1>
          </div>
          <h2 className=' bg-gray-200 rounded-md  px-2 font-semibold py-1 text-center'>0</h2>
        </div>

        <div className='flex flex-col gap-5   h-screen overflow-y-scroll custom-scrollbar'>

          {
            incompData.map((item, i) => (
              <div key={i} className='bg-white  px-3 py-5 '>
                <div className='flex justify-between items-center '>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Client Name</h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Sadik Alam</h1>
                  </div>

                </div>

                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center gap-3 '>
                    <TbBrandDatabricks className='text-gray-700' />
                    <p>lorem ipusm dolor sit amet curen....</p>
                  </div>
                  <div className='bg-gray-300 flex gap-1 items-center px-2 rounded'>
                    <FaCalendarAlt className='text-gray-500 text-sm' />
                    <p className='text-sm'>1/2</p>
                  </div>
                </div>
                <div className='mt-4 flex justify-between  items-center '>
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQE2NivSij5IFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728973336623?e=1736380800&v=beta&t=wU494ERL-f-Bzt913QO7Py_MX-mg2cUSq0_6Bz7qRuc" alt="" />
                  <p className='w-8 h-7 p-1  rounded-full bg-gray-300 text-sm'>12+</p>

                  <div className='flex gap-1 items-center'>
                    <FaRegComments className='text-xl' />
                    <p className='font-semibold text-gray-700 text-sm'>15+</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <ImAttachment onClick={modalOpen} className='text-sm cursor-pointer' />
                    <p className='font-semibold text-gray-700 text-sm '>25</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <FaCalendarDays
                      className='text-sm cursor-pointer text-gray-600' />
                    <p className='font-semibold text-gray-700 text-sm '>30-02-24</p>

                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>



      {/* start TO do  */}
      <div className='bg-gray-300 '>
        <div className=' flex items-center justify-between text-gray-700 px-3 w-[400px] '>
          <div className='flex h-14 items-center gap-1'>
            <p className='bg-[#00b5ff] h-5 w-5 rounded-s-full'></p>
            <h1 className='text-xl'>To Do</h1>
          </div>
          <h2 className=' bg-gray-200 rounded-md  px-2 font-semibold py-1 text-center'>0</h2>
        </div>

        <div className='flex flex-col gap-5 h-screen overflow-y-scroll custom-scrollbar'>
          {
            todoData.map((item, i) => (
              <div key={i} className='bg-white   px-3 py-5 '>
                <div className='flex justify-between items-center '>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Client Name</h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Sadik Alam</h1>
                  </div>

                </div>

                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center gap-3 '>
                    <TbBrandDatabricks className='text-gray-700' />
                    <p>lorem ipusm dolor sit amet curen....</p>
                  </div>
                  <div className='bg-gray-300 flex gap-1 items-center px-2 rounded'>
                    <FaCalendarAlt className='text-gray-500 text-sm' />
                    <p className='text-sm'>1/2</p>
                  </div>
                </div>
                <div className='mt-4 flex justify-between  items-center '>
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQE2NivSij5IFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728973336623?e=1736380800&v=beta&t=wU494ERL-f-Bzt913QO7Py_MX-mg2cUSq0_6Bz7qRuc" alt="" />
                  <p className='w-8 h-7 p-1  rounded-full bg-gray-300 text-sm'>12+</p>

                  <div className='flex gap-1 items-center'>
                    <FaRegComments className='text-xl' />
                    <p className='font-semibold text-gray-700 text-sm'>15+</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <ImAttachment onClick={modalOpen} className='text-sm cursor-pointer' />
                    <p className='font-semibold text-gray-700 text-sm '>25</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <FaCalendarDays
                      className='text-sm cursor-pointer text-gray-600' />
                    <p className='font-semibold text-gray-700 text-sm '>30-02-24</p>

                  </div>

                </div>
              </div>
            ))
          }
        </div>







      </div>


      {/* start Doing  */}
      <div className='bg-gray-300  '>
        <div className=' flex items-center justify-between text-gray-700 px-3  w-[400px]'>
          <div className='flex h-14 items-center gap-1'>
            <p className='bg-[#ffe700] h-5 w-5 rounded-s-full'></p>
            <h1 className='text-xl'>Doing</h1>
          </div>
          <h2 className=' bg-gray-200 rounded-md  px-2 font-semibold py-1 text-center'>0</h2>
        </div>

        <div className='flex flex-col gap-5 h-screen overflow-y-scroll custom-scrollbar'>
          {
            todoData.map((item, i) => (
              <div key={i} className='bg-white   px-3 py-5 '>
                <div className='flex justify-between items-center '>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Client Name</h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Sadik Alam</h1>
                  </div>

                </div>

                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center gap-3 '>
                    <TbBrandDatabricks className='text-gray-700' />
                    <p>lorem ipusm dolor sit amet curen....</p>
                  </div>
                  <div className='bg-gray-300 flex gap-1 items-center px-2 rounded'>
                    <FaCalendarAlt className='text-gray-500 text-sm' />
                    <p className='text-sm'>1/2</p>
                  </div>
                </div>
                <div className='mt-4 flex justify-between  items-center '>
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQE2NivSij5IFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728973336623?e=1736380800&v=beta&t=wU494ERL-f-Bzt913QO7Py_MX-mg2cUSq0_6Bz7qRuc" alt="" />
                  <p className='w-8 h-7 p-1  rounded-full bg-gray-300 text-sm'>12+</p>
                  <div className='flex gap-1 items-center'>
                    <FaRegComments className='text-xl' />
                    <p className='font-semibold text-gray-700 text-sm'>15+</p>
                  </div>
                  <div className='flex gap-1 items-center '>
                    <ImAttachment onClick={modalOpen} className='text-sm cursor-pointer' />
                    <p className='font-semibold text-gray-700 text-sm '>25</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <FaCalendarDays
                      className='text-sm cursor-pointer text-gray-600' />
                    <p className='font-semibold text-gray-700 text-sm '>30-02-24</p>

                  </div>

                </div>
              </div>
            ))
          }
        </div>







      </div>



      {/* Under Review */}
      <div className='bg-gray-300 '>
        <div className=' flex items-center justify-between text-gray-700 px-3  w-[400px] '>
          <div className='flex h-14 items-center gap-1'>
            {/* <p className='bg-[#ffe700] h-5 w-5 rounded-s-full'></p> */}
            <h1 className='text-xl'>Under Review</h1>
          </div>
          <h2 className=' bg-gray-200 rounded-md  px-2 font-semibold py-1 text-center'>0</h2>
        </div>

        <div className='flex flex-col gap-5 h-screen overflow-y-scroll custom-scrollbar'>
          {
            todoData.map((item, i) => (
              <div key={i} className='bg-white   px-3 py-5 '>
                <div className='flex justify-between items-center '>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Client Name</h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Sadik Alam</h1>
                  </div>

                </div>

                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center gap-3 '>
                    <TbBrandDatabricks className='text-gray-700' />
                    <p>lorem ipusm dolor sit amet curen....</p>
                  </div>
                  <div className='bg-gray-300 flex gap-1 items-center px-2 rounded'>
                    <FaCalendarAlt className='text-gray-500 text-sm' />
                    <p className='text-sm'>1/2</p>
                  </div>
                </div>
                <div className='mt-4 flex justify-between  items-center '>
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQE2NivSij5IFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728973336623?e=1736380800&v=beta&t=wU494ERL-f-Bzt913QO7Py_MX-mg2cUSq0_6Bz7qRuc" alt="" />
                  <p className='w-8 h-7 p-1  rounded-full bg-gray-300 text-sm'>12+</p>
                  <div className='flex gap-1 items-center'>
                    <FaRegComments className='text-xl' />
                    <p className='font-semibold text-gray-700 text-sm'>15+</p>
                  </div>
                  <div className='flex gap-1 items-center '>
                    <ImAttachment onClick={modalOpen} className='text-sm cursor-pointer' />
                    <p className='font-semibold text-gray-700 text-sm '>25</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <FaCalendarDays
                      className='text-sm cursor-pointer text-gray-600' />
                    <p className='font-semibold text-gray-700 text-sm '>30-02-24</p>

                  </div>

                </div>
              </div>
            ))
          }
        </div>

      </div>





      {/* Completed*/}
      <div className='bg-gray-300 '>
        <div className=' flex items-center justify-between text-gray-700 px-3  w-[400px] '>
          <div className='flex h-14 items-center gap-1'>
            {/* <p className='bg-[#ffe700] h-5 w-5 rounded-s-full'></p> */}
            <h1 className='text-xl'>Completed</h1>
          </div>
          <h2 className=' bg-gray-200 rounded-md  px-2 font-semibold py-1 text-center'>0</h2>
        </div>

        <div className='flex flex-col gap-5 h-screen overflow-y-scroll custom-scrollbar'>
          {
            todoData.map((item, i) => (
              <div key={i} className='bg-white   px-3 py-5 '>
                <div className='flex justify-between items-center '>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Client Name</h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Sadik Alam</h1>
                  </div>

                </div>

                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center gap-3 '>
                    <TbBrandDatabricks className='text-gray-700' />
                    <p>lorem ipusm dolor sit amet curen....</p>
                  </div>
                  <div className='bg-gray-300 flex gap-1 items-center px-2 rounded'>
                    <FaCalendarAlt className='text-gray-500 text-sm' />
                    <p className='text-sm'>1/2</p>
                  </div>
                </div>
                <div className='mt-4 flex justify-between  items-center '>
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQE2NivSij5IFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728973336623?e=1736380800&v=beta&t=wU494ERL-f-Bzt913QO7Py_MX-mg2cUSq0_6Bz7qRuc" alt="" />
                  <p className='w-8 h-7 p-1  rounded-full bg-gray-300 text-sm'>12+</p>
                  <div className='flex gap-1 items-center'>
                    <FaRegComments className='text-xl' />
                    <p className='font-semibold text-gray-700 text-sm'>15+</p>
                  </div>
                  <div className='flex gap-1 items-center '>
                    <ImAttachment onClick={modalOpen} className='text-sm cursor-pointer' />
                    <p className='font-semibold text-gray-700 text-sm '>25</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <FaCalendarDays
                      className='text-sm cursor-pointer text-gray-600' />
                    <p className='font-semibold text-gray-700 text-sm '>30-02-24</p>

                  </div>

                </div>
              </div>
            ))
          }
        </div>

      </div>




      {/* Over*/}
      <div className='bg-gray-300  '>
        <div className=' flex items-center justify-between text-gray-700 px-3  w-[400px]'>
          <div className='flex h-14 items-center gap-1'>
            {/* <p className='bg-[#ffe700] h-5 w-5 rounded-s-full'></p> */}
            <h1 className='text-xl'>Over</h1>
          </div>
          <h2 className=' bg-gray-200 rounded-md  px-2 font-semibold py-1 text-center'>0</h2>
        </div>

        <div className='flex flex-col gap-5 h-screen overflow-y-scroll custom-scrollbar'>
          {
            todoData.map((item, i) => (
              <div key={i} className='bg-white   px-3 py-5 '>
                <div className='flex justify-between items-center '>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Client Name</h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                    <h1 className='font-semibold'>Sadik Alam</h1>
                  </div>

                </div>

                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center gap-3 '>
                    <TbBrandDatabricks className='text-gray-700' />
                    <p>lorem ipusm dolor sit amet curen....</p>
                  </div>
                  <div className='bg-gray-300 flex gap-1 items-center px-2 rounded'>
                    <FaCalendarAlt className='text-gray-500 text-sm' />
                    <p className='text-sm'>1/2</p>
                  </div>
                </div>
                <div className='mt-4 flex justify-between  items-center '>
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/C4D03AQGSw3T9yRjpcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655657471966?e=1736380800&v=beta&t=LvT8Bxf5zmWkDv1FhQuBEk61zgFveU7M1pTpgQdjPXY" alt="" />
                  <img className='h-7 w-7 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQE2NivSij5IFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728973336623?e=1736380800&v=beta&t=wU494ERL-f-Bzt913QO7Py_MX-mg2cUSq0_6Bz7qRuc" alt="" />
                  <p className='w-8 h-7 p-1  rounded-full bg-gray-300 text-sm'>12+</p>
                  <div className='flex gap-1 items-center'>
                    <FaRegComments className='text-xl' />
                    <p className='font-semibold text-gray-700 text-sm'>15+</p>
                  </div>
                  <div className='flex gap-1 items-center '>
                    <ImAttachment className='text-sm cursor-pointer' />
                    <p className='font-semibold text-gray-700 text-sm '>25</p>

                  </div>


                  <div className='flex gap-1 items-center '>
                    <FaCalendarDays
                      className='text-sm cursor-pointer text-gray-600' />
                    <p className='font-semibold text-gray-700 text-sm '>30-02-24</p>

                  </div>

                </div>
              </div>
            ))
          }
        </div>

      </div>


      {/* Modal */}
      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}

      />



    </div>

  );
}

export default App;
