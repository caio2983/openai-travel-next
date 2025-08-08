export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Roteiro de viagens</h1>
      <p className="description">
        Digite o destino e receba um roteiro personalizado com sugestões de
        passeios, gastronomia e cultura, gerado pelo modelo GPT-35-Turbo da
        OpenAI, implementado via Azure.
      </p>

      <form className="form">
        <label htmlFor="destino" className="label">
          Quero viajar para:
        </label>
        <input
          id="destino"
          name="destino"
          type="text"
          placeholder="Ex: Roma, Itália"
          className="input"
          required
        />

        <button type="submit" className="button">
          Gerar roteiro
        </button>
      </form>
    </div>
  );
}
