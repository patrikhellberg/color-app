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
      <p>My page</p>
    </PageWrapper>
  )
}

export default Page
