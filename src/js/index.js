const adviceId = document.getElementById('advice-id');
const randomAdvice = document.getElementById('advice');

async function selectNewRandomAdvice() {
    const { slip: { id, advice } } = await (await fetch("https://api.adviceslip.com/advice")).json()
    adviceId.innerHTML = id
    randomAdvice.innerHTML = advice
}

selectNewRandomAdvice()

document.querySelector('.btn-new-advice').addEventListener('click', selectNewRandomAdvice);