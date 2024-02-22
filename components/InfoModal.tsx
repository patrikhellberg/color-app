'use client'

import { useContext } from 'react'
import { AppContext } from './AppContext'
import OverlayContainer from './OverlayContainer'
import SVG, { X } from '@bm-js/icons'

const InfoModal = () => {
  const {
    state: { infoModalOpen },
    dispatch,
  } = useContext(AppContext)

  const closeInfoModal = () => dispatch({ type: 'SET_INFO_MODAL', data: false })

  return (
    <OverlayContainer active={infoModalOpen}>
      <div className='bg-white p-4 rounded-lg max-w-[600px] relative'>
        <button className='absolute top-4 right-4' onClick={closeInfoModal}>
          <SVG icon={X} width={20} />
        </button>
        <h1 className='font-semibold text-xl mb-2'>
          What is this app and why do I need it?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt
          quae magnam minus nulla vel doloremque dolorem eos distinctio
          reprehenderit? Quaerat nesciunt, culpa doloribus fugit eaque
          blanditiis deleniti aliquam neque. Nostrum ad velit mollitia veniam
          eos optio esse veritatis nemo praesentium qui sapiente sed, neque
          atque perspiciatis ipsum animi nihil vero sequi! Vitae numquam
          blanditiis quasi fugit nesciunt quam nam, in incidunt tenetur
          inventore qui esse eaque voluptatem officia, est doloremque ipsa
          reiciendis enim illum minima harum corrupti fuga animi? Quos ullam
          magnam accusantium dolor tenetur dolore cum quod? Explicabo, quam
          voluptatibus minima officiis eveniet autem non deserunt ipsa id?
        </p>
      </div>
    </OverlayContainer>
  )
}

export default InfoModal
