import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
interface CodeBlockProps {
  code: string;
  lang?: string;
  theme?: string;
}

const CodeBlock = ({ code, lang = 'javascript' }: CodeBlockProps) => {
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const highlight = async () => {
      setIsLoading(true);
      const highlighted = await codeToHtml(code, {
        lang,
        theme: 'everforest-light',
      });
      setIsLoading(false);
      setHtml(highlighted);
    };
    highlight();
  }, [code, lang]);

  if (isLoading)
    return (
      <div className='h-30 flex justify-center items-center w-full overflow-x-auto rounded-xl bg-portfolio-light dark:bg-portfolio-dark'>
        Loading Code ...
      </div>
    );
  return (
    <div
      className='w-full overflow-x-auto rounded-xl bg-portfolio-light dark:bg-portfolio-dark p-4 text-sm leading-relaxed  [&>pre]:bg-transparent! shadow-subtle'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default CodeBlock;
