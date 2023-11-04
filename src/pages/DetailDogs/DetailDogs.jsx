import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import './DetailDogs.css'
import environments from '../../environments/environments';
import Button from "../../componets/Button/Button";

const DetailDogs = () => {

    const { id } = useParams()
    const { addDog } = useContext(CartContext)

    const [dog, setDog] = useState({})

    const getDogbyId = async (id) => {
      try {
        const response = await fetch(environments.dogsUrl);
        const data = await response.json(); // data es un array de productos
        const result = data.find( (dog)=> dog.id === id );
        setDog(result);
      } catch (error) {
        console.error(error); 
      }
    }

    useEffect(() => {

      getDogbyId(id)

    }, [id])

  return (
    <div className="detailDogsContainers"> 
      <h2>{dog.name}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius dolor non metus laoreet, quis feugiat nibh tristique. Sed non 
        cursus nisi, at interdum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam imperdiet imperdiet orci vitae 
        egestas. Vivamus libero metus, tempor vel dui vel, porta dignissim lorem. Cras ullamcorper eros id risus efficitur porttitor. Integer vel
        rhoncus lectus, ut fringilla odio. Nunc condimentum malesuada velit, eu faucibus ante tempus ut. Suspendisse blandit tortor libero, nec 
        dignissim augue condimentum hendrerit. Aliquam feugiat felis quis auctor viverra. Proin sed justo placerat, aliquet ante at, pharetra 
        urus. Praesent vitae leo dui. Curabitur id nisi ultricies, finibus elit id, ultrices mi. Fusce vel ultrices risus. Praesent eu finibus 
        eros, a finibus urna. Nam dolor ex, mattis id turpis et, tristique eleifend mi. Ut imperdiet aliquet viverra. Ut tempor augue vitae 
        bibendum porta. Proin sit amet leo enim. Duis sapien enim, sodales vitae diam at, iaculis egestas diam. Aenean facilisis sem sed ex 
        varius scelerisque. Morbi molestie lorem enim, id semper metus consectetur id. Aenean libero tellus, bibendum ut eros eu, feugiat 
        vestibulum magna.
      </p>
      <Button title="Adoptar" handleClick={()=>{addDog(dog)}}></Button>
    </div>

  )
}

export default DetailDogs