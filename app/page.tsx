import ColorDisplay from '@/components/ColorDisplay'
import InfoModal from '@/components/InfoModal'
import PageWrapper from '@/components/PageWrapper'
import ShareModal from '@/components/ShareModal'
import Toolbar from '@/components/Toolbar'
import ToolbarIcons from '@/components/ToolbarIcons'

const Page = () => {
  return (
    <PageWrapper>
      <Toolbar />
      <ToolbarIcons />
      <InfoModal />
      <ShareModal />
      <ColorDisplay />
    </PageWrapper>
  )
}

export default Page
