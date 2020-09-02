import { sortRef } from './ref';

export const sortSubjects = () => {
    let sort = sortRef.current;
    for (let i = 0; i < sort.children.length; i++) {
        for (let j = i; j < sort.children.length; j++) {
            if (+sort.children[i].getAttribute('data-srt') > +sort.children[j].getAttribute('data-srt')) {
                let replacedNode = sort.replaceChild(sort.children[j], sort.children[i]);
                insertBefore(replacedNode, sort.children[i]);
            }
        }
    }
}

const insertBefore = (elem, refElem) => {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}