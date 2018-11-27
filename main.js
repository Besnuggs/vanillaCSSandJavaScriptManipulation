const inputs = document.querySelectorAll('.controls input')

function handleUpdate () {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

//Will update once value has been released by user.
inputs.forEach(input => input.addEventListener('change', handleUpdate))
//Will update in real-time as it's listening for mouse movement.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))