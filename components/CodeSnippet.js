const CodeSnippet = ({language, code}) => {
    return ( 
        <div>
          <span className="code-lang">{language}</span>
          <pre data-language={language} className={`language-${language}`}>
            <code>{code}</code>
          </pre>
        </div>
     );
}
 
export default CodeSnippet;