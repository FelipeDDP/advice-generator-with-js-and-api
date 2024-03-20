const btnNewAdvice = document.querySelector('.btn-new-advice');
const adviceId = document.getElementById('advice-id');
const randomAdvice = document.getElementById('advice');

async function selectNewRandomAdvice() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const json = await response.json()
    console.log(json)
    console.log(json.slip.id)
    adviceId.innerHTML = json.slip.id
    randomAdvice.innerHTML = json.slip.advice
}

selectNewRandomAdvice()

btnNewAdvice.addEventListener('click', () => {
    selectNewRandomAdvice()
})