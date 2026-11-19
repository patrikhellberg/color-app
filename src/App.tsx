import AppContextProvider from '@/components/AppContext'
import ColorDisplay from '@/components/ColorDisplay'
import Footer from '@/components/Footer'
import InfoModal from '@/components/InfoModal'
import ShareModal from '@/components/ShareModal'
import Toolbar from '@/components/Toolbar'
import ToolbarIcons from '@/components/ToolbarIcons'

const App = () => {
  return (
    <>
      <main className='h-screen'>
        <AppContextProvider>
          <Toolbar />
          <ToolbarIcons />
          <InfoModal />
          <ShareModal />
          <ColorDisplay />
        </AppContextProvider>
      </main>
      <Footer />
    </>
  )
}

export default App
