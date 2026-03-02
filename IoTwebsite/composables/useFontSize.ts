export const useFontSize = () => {
  const size = useState('fontSize', () => 100) // percent

  const applySize = () => {
    document.documentElement.style.fontSize = size.value + '%'
    localStorage.setItem('fontSize', size.value.toString())
  }

  const increase = () => {
    if (size.value < 120) {
      size.value += 5
      applySize()
    }
  }

  const decrease = () => {
    if (size.value > 85) {
      size.value -= 5
      applySize()
    }
  }

  const reset = () => {
    size.value = 100
    applySize()
  }

  const load = () => {
    const saved = localStorage.getItem('fontSize')
    if (saved) {
      size.value = parseInt(saved)
      applySize()
    }
  }

  return { size, increase, decrease, reset, load }
}