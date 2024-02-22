import PageWrapper from '@/components/PageWrapper'
import Toolbar from '@/components/Toolbar'
import ToolbarIcons from '@/components/ToolbarIcons'

const Page = () => {
  return (
    <PageWrapper>
      <Toolbar />
      <ToolbarIcons />
      <p>My page</p>
    </PageWrapper>
  )
}

export default Page
