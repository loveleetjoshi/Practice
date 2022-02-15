let i = 0;
let id;

const getData = () => {
    clearTimeout(id);
    id = setTimeout(() => {
        console.log('Getting data...',i++);
    }, 300);
}