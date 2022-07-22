import React, {useEffect} from 'react';
import { FaTags } from 'react-icons/fa';

import './SingleTextInput.scss';

function SingleTextInput ({searchTerm, setSearchTerm, collection=[], onSubmit, placeholder="Search by name", width="93%"}) {


    const styles = {
        "width" : width
    }


    useEffect(() => {
        const keyDownHandler = event => {
          console.log('User pressed: ', event.key);
    
          if (event.key === 'Enter') {
            event.preventDefault();
    
            // 👇️ call submit function here
            handleSubmit();
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

      const handleSubmit = () => {
        onSubmit([...collection, searchTerm])
      }

    return (
        <input 
            style={styles}
            className="searchBar" 
            placeholder={placeholder}
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SingleTextInput;