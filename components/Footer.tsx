import SVG, { GitBranch, GithubLogo } from '@bm-js/icons'

const Footer = () => {
  const githubLink = 'https://github.com/patrikhellberg'
  const sourceCodeLink = 'https://github.com/patrikhellberg'

  return (
    <div className='flex items-center justify-around border-t border-solid border-slate-600 px-4 py-8'>
      <p>© Patrik Hellberg {new Date().getFullYear()}</p>
      <a
        href={githubLink}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 underline'
      >
        <SVG icon={GithubLogo} width={16} />
        <p>@patrikhellberg</p>
      </a>
      <a
        href={sourceCodeLink}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 underline'
      >
        <SVG icon={GitBranch} width={16} />
        <p>Source</p>
      </a>
    </div>
  )
}

export default Footer
