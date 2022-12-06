async function getDatas() {
  try {
    const response = await fetch('http://192.168.0.195:5000/numeros')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

export default getDatas