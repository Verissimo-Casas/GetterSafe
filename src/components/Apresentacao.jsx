export default function Welcome() {
const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <h1 className="shadow-2xl shadow-cyan-500/80 text-white text-6xl">Seja bem vindo ao Metazonia</h1>
    </div>
  )
}
