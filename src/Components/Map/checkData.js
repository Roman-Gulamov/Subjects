import React from 'react'


export const checkData = (parentId, title, pageTitle, srt) => {
    if (parentId === null) {
        return (
            <>
                <h2 className="text-center mb-4">{title}</h2>
                <h3 className="text-center mb-4">{pageTitle}</h3>
            </>
        )
    } else {
        return (
            <div className="result-item">
                <a 
                    className="result-subject"
                    href={`https://yandex.ru/search/?lr=2&text=${title}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                >{`#${srt} ${title}`}
                </a>
            </div>
        );
    }
}

export const getPageId = (data, pageTitle) => {
    let mainTitle = data.filter(item => item.title.toLowerCase() === pageTitle.toLowerCase());
    let pageId = mainTitle.map(item => item.id);

    return parseInt(pageId);
}
