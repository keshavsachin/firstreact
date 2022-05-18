
import './App.css';
import './Input'
import Input from './Input';
import './Input';
import './Input1.css';

function App() {
        

        return(
          <div className='Input1'>
          <div className='headercont'>
            <h1>Header</h1>
          </div>
          <div className='container'>
           <div className='navcont'>
             <h2>Home</h2>
             <h2>Explore</h2>
             <h2>Shorts</h2>
             <h2>Subscription</h2>
             <h2>Library</h2>
             <h2>History</h2>
             <h2>Watch later</h2>
             <h2>Liked videos</h2>
           </div>
            <div className='contentandfooter'>
              <div className='content'>
                <div className='videos'>tamil songs</div>
                <div className='videos'>sachin tendulkar speech</div>
                <div className='videos'>cricket videos</div>
                <div className='videos'>Ben Lionel Scott</div>
            
              </div>
              <div className='footer'>
                <h2>Downloads</h2>
                <h2>Favourites</h2>
                <h2>Your Account</h2>
              </div>
          </div>
          </div>
            <Input/>
          </div>
      
        )
    }
   

 



export default App;
