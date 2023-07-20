import React, {useEffect} from 'react';

function Name({item, onClick}) {
  useEffect(() => {
   console.log('RENDERED!' + item.model)
  })
  return (
      <button
        style={{
          width: '100px',
          height: '20px',
          backgroundColor: 'gray',
        }}
        onClick={() => onClick(item)}
      >
        {item.model}
      </button>
  );
}

export default React.memo(Name);