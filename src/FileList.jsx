import React from 'react'
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,    
    Type as ListType
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';


function FileList(props) {


    const trailingActions = () => (
        <TrailingActions>
          <SwipeAction destructive={false}
                     onClick={() => console.info('swipe action triggered')}>
                <span >Play</span>
          </SwipeAction>
        </TrailingActions>
      );

    const renderList = () => {
        return props.files.map(file => (
            <SwipeableListItem key={file.id} trailingActions={trailingActions()}  >
                    <div >{file.name}</div>     
             </SwipeableListItem >

        ));
      };

    return (
        <div>
            <SwipeableList fullSwipe={false}  ListType={ListType.IOS}>
                { renderList()} 
            </SwipeableList>
        </div>
    )
}

export default FileList;