import BookCard from "./components/BookCard"
import { useState } from "react"
function App() {
 const [books, setBooks] = useState( [
         {id : 1, titre:"Shingeki no kyojin", auteur:"Hajime Isayama", estDisponible:true},
         {id : 2, titre:"Bleach", auteur:"Tite Kubo", estDisponible:false},
         {id : 3, titre:"My Hero Academia", auteur:"Kohei Horikoshi", estDisponible:true},
         {id : 4, titre:"Jojo's Bizzare Adventure", auteur:"Hirohiko Araki", estDisponible:false},])
  const onClickEmprunt = (BookId)=>{
      const booksList= books.map((b)=> {
        if(b.id === BookId){
          return {...b,estDisponible:! b.estDisponible};
        }
        return b;
      });
      setBooks(booksList);
  }
  const livresdisponibles=books.filter((b)=>b.estDisponible).length
  const [titre, setTitre] =useState("");
  const [auteur, setAuteur] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(titre.trim()==="" || auteur.trim()===""){
      return;
    }
    const nouveauLivre = {
      id: Date.now(),
      titre : titre,
      auteur : auteur,
      estDisponible: true
    };
   setBooks([...books, nouveauLivre]);
   setTitre("");
   setAuteur("");
  };

  return (
    <div style={{padding:'10px'}}>
      <h1>Nombre de Livres Disponibles : {livresdisponibles}</h1>
      <form onSubmit={handleSubmit} style={{ margin: "0 auto 20px auto",Width: "400px" }}>
  <fieldset>
    <legend>Ajouter Un Nouveau Livre</legend>

    <label>Titre :</label><br />
    <input
      type="text"
      value={titre}
      onChange={(e) => setTitre(e.target.value)}
    /><br /><br />

    <label>Auteur :</label><br />
    <input
      type="text"
      value={auteur}
      onChange={(e) => setAuteur(e.target.value)}
    /><br /><br />

    <button type="submit">Ajouter</button>
  </fieldset>
</form>
        <h2>LISTE COMPLETE DES LIVRES</h2>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
          {
            books.map((b)=>(
              <BookCard titre={b.titre} auteur={b.auteur} estDisponible={b.estDisponible} key = {b.id} onClickEmprunt={()=>onClickEmprunt(b.id)}></BookCard>
            ))
          }
        </div>
       </div>
  )
}

export default App
