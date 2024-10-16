import React from 'react';
import { CodeBlock as ReactCodeBlock, dracula } from 'react-code-blocks';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {



  console.log(code)

  // const codeString = code.then((code) => code);
  return (
    <ReactCodeBlock
      text={code}
      language={language}
      showLineNumbers={true}
      theme={dracula}
    />
  );
};
