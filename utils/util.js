const colors = ['#3b5999', '#55acee', '#0D58A6', 
                '#26517C', '#04376C', '#4188D2', 
                '#1921B1', '#7277D8']

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}