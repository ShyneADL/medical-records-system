import Image from 'next/image'
import Link from 'next/link'

const Bell = () => {
  return (
    <div className='rounded-full border-[1px] border-solid border-grey relative'>
      <Image
      src=''
      width={24}
      height={24}
      />
      <div className='rounded-full border-[1px] border-solid border-white bg-orange absolute top-0 right-[-2.5px]'></div>
    </div>
  )
}

export default Bell;