const CodeSnippet = ({ language, code }) => {
  return (
    <div>
      <p className="rounded-t-lg bg-white/50 px-4 py-2 text-indigo-500 font-semibold w-max !mb-0">
        {language === "javascript" ? "JavaScript" : language}
      </p>
      <pre
        data-language={language}
        className={`language-${language} rounded-lg rounded-l-none !mt-0`}
      >
        <code className="!bg-transparent !text-current">{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
