import Modal from './Modal'

const ShareModal = () => {
  return (
    <Modal modalKey='shareModalOpen' closeActionType='SET_SHARE_MODAL'>
      <h1 className='font-semibold text-xl mb-2'>
        Share this state of the app!
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt
        quae magnam minus nulla vel doloremque dolorem eos distinctio
        reprehenderit? Quaerat nesciunt, culpa doloribus fugit eaque blanditiis
        deleniti aliquam neque. Nostrum ad velit mollitia veniam eos optio esse
        veritatis nemo praesentium qui sapiente sed, neque atque perspiciatis
        ipsum animi nihil vero sequi! Vitae numquam blanditiis quasi fugit
        nesciunt quam nam, in incidunt tenetur inventore qui esse eaque
        voluptatem officia, est doloremque ipsa reiciendis enim illum minima
        harum corrupti fuga animi? Quos ullam magnam accusantium dolor tenetur
        dolore cum quod? Explicabo, quam voluptatibus minima officiis eveniet
        autem non deserunt ipsa id?
      </p>
    </Modal>
  )
}

export default ShareModal
