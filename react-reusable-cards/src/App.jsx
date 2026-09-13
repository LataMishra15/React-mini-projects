import Cards from './components/cardsUI.jsx'


const App = () => {
  return (
    <div className="parent">
      <Cards image="https://i.pinimg.com/736x/64/74/e5/6474e5db6350cd518c0f2b4a6eaac783.jpg" pin="✨ Spicy Choice" name="Golden Crispy Fried Momos" desc="Each momo has a perfectly crunchy, golden-brown exterior with a juicy filling inside." moreDetail1=" 15 mins" moreDetail2="2 servings" moreDetail3="Full" btmspan1="chili flakes" btmspan2="Garlic" btmspan3="+8" button="Start Cooking"/>
      <Cards image="https://i.pinimg.com/1200x/19/0b/18/190b187a77b877dc77d657bfaeb00f59.jpg" pin="Guest Favourite" name="Business Day" desc="Quite, Clean, Peaceful, Modern.. " moreDetail1=" Bed: 2" moreDetail2="Baths: 2" moreDetail3="sqft: 1157" />
      <Cards image="https://i.pinimg.com/1200x/ba/bb/cd/babbcde0fe4270b3990638a3c070569a.jpg" pin="✨ Prime Pick" name="$ 250,000" desc="Harry konigsberg's, 1063 AG" moreDetail1=" 25m² Living" moreDetail2="2 rooms" btmspan1="By • Waleed sabir" button="View Details"/>
    </div>
  )
}

export default App