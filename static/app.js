const form = document.body.querySelector('.form')
const input = document.body.querySelector('.inp')
const searchBox = document.body.querySelector('.findUrl')
const btn = document.body.querySelector('.button')
const storage = document.body.querySelector('.storage')
// console.log(form)
// console.log(input)





btn.addEventListener('click', async(event) => {
    event.preventDefault()
    let res = await axios.post('/', {url: input.value})
    let data = await res.data
    console.log(data)
    console.log(res)
    for(let i = 0;i < data.length; i++) {
        searchBox.innerHTML += `<p class="item">${data[i]}</p>`
    }
    const par = document.body.querySelector('.item')
    par.addEventListener('click', async(event) => {
        storage.innerHTML = `<p class="wind">${par.textContent}</p>`
        const wind = document.querySelector('.wind')
        localStorage.setItem(`${Math.floor(Math.random()*9999)}-${data}`, data)
        wind.addEventListener('click', (event) => {
            window.open(`http://localhost:8000/files/${par.textContent}`);
        })
    })
})


