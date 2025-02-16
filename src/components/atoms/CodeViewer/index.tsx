// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import { monokaiDarkSoda } from './settings'
import * as S from './styles'

interface ICodeViewerProps {
  code: string
}

export const CodeViewer: React.FC<ICodeViewerProps> = ({ code }) => {
  return (
    <S.Container>
      <SyntaxHighlighter
        language="typescript"
        style={monokaiDarkSoda as SyntaxHighlighterProps['style']}
        className="syntax-highlighter"
        customStyle={{ height: '100%' }}
      >
        {code}
      </SyntaxHighlighter>
    </S.Container>
  )
}
