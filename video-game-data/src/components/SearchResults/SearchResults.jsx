import React from 'react'
import './SearchResults.css'

const SearchResults = ({filteredGames}) => {
   
    return ( 
        <table>
            <tr>
                <th>Title</th>
                <th>Rank</th>
                <th>Platform</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Publisher</th>
            </tr>    
        {filteredGames.map((game)=>{
            return(
            <tr>
                <td>{game.name}</td>
                <td>{game.game_rank}</td>
                <td>{game.platform}</td>
                <td>{game.year}</td>
                <td>{game.genre}</td>
                <td>{game.publisher}</td>
            </tr>    
            )
        })}
       </table> 
     );
 
}
export default SearchResults

















// function displaySearchResults(){
//     <tr>
//         <p>Title:</p>
//         <p>Rank:</p>
//         <p>Platform:</p>
//         <p>Year:</p>
//         <p>Genre:</p>
//         <p>Publisher:</p>
//     </tr>
//     {filteredGames.map((game) => {
//         return(
//             <tr>
//                 <td>{game.name}</td>
//             </tr>
//         )
//     })}
// }