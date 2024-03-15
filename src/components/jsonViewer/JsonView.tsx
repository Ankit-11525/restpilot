import React from 'react';
import JsonView from '@uiw/react-json-view';

const object = {
  avatar: 'https://i.imgur.com/MK3eW3As.jpg',
  string: 'Lorem ipsum dolor sit amet',
  integer: 42,
}

export default function Demo(data:any) {
  return (
    <div className=' p-5 w-1/2'> {/* Setting width to 1/2 (50%) */}
      <JsonView
        value={data}
        keyName="root"
        displayObjectSize={false}
        style={{
          backgroundColor: '#ffffff',
        }}
      >
        <JsonView.String
          render={({ children, ...reset }, { type, value, keyName }: any) => {
            const isImg = /^https?.*\.(jpg|png)$/i.test(value)
            if (type === 'type' && isImg) {
              return <span />
            }
            if (type === 'value' && isImg) {
              return <img {...reset} height="26" src={value} />
            }
          }}
        />
        <JsonView.Colon> -&gt; </JsonView.Colon>
      </JsonView>
    </div>
  );
}
