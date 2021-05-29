import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

//vim ze v zadani bylo, ze staci vytvorit jen jednu komponentu App. Ale me se nechtelo u ni pripisovat return statement a hlavne menit zavorky, kdyz v dalsim kroku bych stejne veskery ten kod zase vyjimala a presunovala jinam, takze by tam pak ten return byl zase navic (radsi napisu sahodlouhou poznamku)
const Joke = () => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
          />
          <p className="user-name">Neroxx</p>
        </div>

        <p className="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when the
          president is about to be attacked. Now they have to yell "Donald,
          duck!"
        </p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => setUpvotes(upvotes + 1)}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {upvotes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => setDownvotes(downvotes + 1)}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {downvotes}
        </span>
      </div>
    </div>
  );
};

const App = () => (
  <>
    <div className="container">
      <Joke />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
