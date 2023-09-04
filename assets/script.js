/* ---------- */
/* EIGHTBALL ANIMATION  */

let tl = gsap.timeline()

/* ---------- */
/* EIGHTBALL TEXT OUTPUT 
THIS IS WORKING DON'T CHANGE ITTT */

const shakeBtn = document.querySelector('button')
const userQ = document.getElementById('question')
const shakeInput = document.querySelector('input[name=ask]')
const eightBallText = document.getElementById('answer')
eightBallText.textContent = ''

function shakeEightBall() {
    let eightBall = ''
    const randomNumber = Math.floor(Math.random() * 8)

    // eightball answer
    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain'
            break
        case 1:
            eightBall = 'It is decidedly so'
            break
        case 2:
            eightBall = 'Reply hazy try again'
            break
        case 3:
            eightBall = 'Cannot predict now'
            break
        case 4:
            eightBall = 'Do not count on it'
            break
        case 5:
            eightBall = 'My sources say no'
            break
        case 6:
            eightBall = 'Outlook not so good'
            break
        case 7:
            eightBall = 'Signs point to yes'
            break
    }

    tl.to('#answer', { opacity: 0 }, '<')
        .to('#ball', { y: -1000, duration: 1, ease: 'power2' })
        .to('#shadow', { scale: 0.55, duration: 1, ease: 'power2' }, '-=1')
        .to('#shadow', {
            keyframes: {
                '25%': { x: 0, y: 0 },
                '50%': { x: -200, y: 0 },
                '75%': { x: 200, y: 0 },
                '100%': { x: 0, y: 0 },
                ease: 'power2.out',
            },
            duration: 2,
        })
        .to('#ball', { y: 0, duration: 1, ease: 'power2' })
        .to('#shadow', { scale: 1, ease: 'power2' }, '-=1')
        .to('#texture', { x: 0, duration: 1, ease: 'power2.out' }, '-=1')

    return (eightBallText.textContent = eightBall)
}

shakeBtn.addEventListener('click', shakeEightBall)
shakeInput.addEventListener('change', updateValue)
shakeInput.addEventListener('keypress', escapeHtml)

function updateValue(e) {
    shakeEightBall()
    const question = shakeInput.value
    userQ.textContent = `You asked: ${question}`
    shakeBtn.innerText = 'Shake again'
    tl.to('#answer', {
        keyframes: {
            '25%': { opacity: 0 },
            '100%': { opacity: 1 },
        },
        duration: 1,
    })

    return (shakeInput.value = '')
}

// escape characters on text input
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}
