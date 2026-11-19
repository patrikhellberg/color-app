import { GitBranch } from 'lucide-react'
import GithubIcon from './GithubIcon'

const Footer = () => {
  const githubLink = 'https://github.com/patrikhellberg'
  const sourceCodeLink = 'https://github.com/patrikhellberg/color-app'

  return (
    <div className='bg-gray-900 text-gray-400 md:flex-row flex-col gap-4 flex items-center justify-around border-t border-solid border-slate-600 px-4 py-8'>
      <p>© Patrik Hellberg {new Date().getFullYear()}</p>
      <a
        href={githubLink}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 underline'
      >
        <GithubIcon size={16} />
        <p>@patrikhellberg</p>
      </a>
      <a
        href={sourceCodeLink}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 underline'
      >
        <GitBranch size={16} strokeWidth={1.5} />
        <p>Source</p>
      </a>
    </div>
  )
}

export default Footer
