import Prism from "prismjs";
import { useEffect } from "react";

// Import core languages
import "prismjs/components/prism-markup"; // HTML/XML
import "prismjs/components/prism-css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

import "./code-theme.css";

interface Props {
    code: string;
    lang: string;
}

// Normalize language names to match PrismJS conventions
const normalizeLanguage = (lang: string): string => {
    const langMap: Record<string, string> = {
        'js': 'javascript',
        'ts': 'typescript',
        'py': 'python',
        'html': 'markup',
        'xml': 'markup',
        'sh': 'bash',
        'shell': 'bash',
        'txt': 'text',
    };
    
    const normalizedLang = langMap[lang.toLowerCase()] || lang.toLowerCase();
    
    // Check if the language is supported by PrismJS
    if (Prism.languages[normalizedLang]) {
        return normalizedLang;
    }
    
    // Fallback to 'text' if language is not supported
    return 'text';
};

export const CodeView = ({
    code,
    lang
}: Props) => {
    const normalizedLang = normalizeLanguage(lang);

    useEffect(() => {
        // Only highlight if the language is supported and code exists
        if (code && normalizedLang !== 'text') {
            try {
                Prism.highlightAll();
            } catch (error) {
                console.warn(`Failed to highlight code with language: ${normalizedLang}`, error);
            }
        }
    }, [code, normalizedLang]);

    return (
        <pre className="p-2 bg-transparent border-none rounded-none m-0 text-xs">
            <code className={`language-${normalizedLang}`}>
                {code}
            </code>
        </pre>
    );
};