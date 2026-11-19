import Modal from './Modal'

const InfoModal = () => {
  return (
    <Modal modalKey='infoModalOpen' closeActionType='SET_INFO_MODAL'>
      <h1 className='font-semibold text-xl mb-2'>
        What is this app, why do I need it, and how do I use it?
      </h1>
      <p className='mb-2'>
        The purpose of this website is to be able to use your screen as a mood
        light. <br />
        Many people keep a screen, TV or laptop at home. Why not be able to use
        all of that screen real estate to light up your home?
      </p>
      <p className='mb-2'>
        Click the gear icon on the top right to get started.
      </p>
      <p className='mb-1'>Select a mode</p>
      <ul className=' list-disc pl-4 mb-2'>
        <li>
          <strong>Color</strong> lets you pick a single color to set your screen
          to
        </li>
        <li>
          <strong>Gradient</strong> lets you pick a two colors to set as a
          gradient
        </li>
        <li>
          <strong>Fade</strong> lets you pick a two colors between which the
          screen will fade
        </li>
      </ul>
      <p className='mb-2'>
        Other options will appear depending on which mode you select.
      </p>
    </Modal>
  )
}

export default InfoModal
