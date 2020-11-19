import React, {useState} from 'react';
import List from './List';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button onClick={() => {setShowMenu(!showMenu)}}>menu</button>
      {showMenu && (
        <List
          onClose={() => {setShowMenu(false);}}
        />
      )}
    </div>
  );
};

export default Navigation;
