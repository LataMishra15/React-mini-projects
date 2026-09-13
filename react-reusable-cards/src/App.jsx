import Cards from './components/cardsUI.jsx'
import {Clock5} from 'lucide-react'
import {Users} from 'lucide-react'
import {ChefHat} from 'lucide-react'
import {BedDouble} from 'lucide-react'
import {Bath} from 'lucide-react'
import {RulerDimensionLine} from 'lucide-react'
import {Proportions} from 'lucide-react'
import {House} from 'lucide-react'


const App = () => {
  return (
    <div className="parent">
      <Cards image="https://i.pinimg.com/736x/64/74/e5/6474e5db6350cd518c0f2b4a6eaac783.jpg" pin="✨ Spicy Choice" name="Golden Crispy Fried Momos" desc="Each momo has a perfectly crunchy, golden-brown exterior with a juicy filling inside." moreDetail1={<><Clock5 size={20}/> 15 mins</>} moreDetail2={<><Users size={20} /> 2 servings</>} moreDetail3={<><ChefHat size={20} />Full</>} btmspan1="chili flakes" btmspan2="Garlic" btmspan3="+8" button="Start Cooking"/>
      <Cards image="https://i.pinimg.com/1200x/19/0b/18/190b187a77b877dc77d657bfaeb00f59.jpg" pin="Guest Favourite" name="Business Day" desc="Quite, Clean, Peaceful, Modern.. " moreDetail1={<><BedDouble size={20} /> Bed: 2</>} moreDetail2={<><Bath size={20} /> Baths: 2</>} moreDetail3={<><RulerDimensionLine size={20} /> sqft: 1157</>} />
      <Cards image="https://i.pinimg.com/1200x/ba/bb/cd/babbcde0fe4270b3990638a3c070569a.jpg" pin="✨ Prime Pick" name="$ 250,000" desc="Harry konigsberg's, 1063 AG" moreDetail1={<><Proportions size={20} /> 25m² Living</>} moreDetail2={<><House size={20} /> 2 rooms</>} btmspan1="By • Waleed sabir" button="View Details"/>
    </div>
  )
}

export default App