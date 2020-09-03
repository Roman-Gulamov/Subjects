import React from 'react'


export const checkData = (parentId, title, pageTitle, pageId, srt) => {
    if (parentId === null) {
        return <h2 className="text-center mb-4" data-srt='-2'>{title}</h2>
    } else if (title.toLowerCase() === pageTitle.toLowerCase()) {
        return <h3 className="text-center mb-4" data-srt='-1'>{title}</h3>
    } else if (parentId.toString() === pageId) {
        return (
            <div 
                data-srt={srt} 
                className="result-item"
            >
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
    
    return pageId.join();
}
