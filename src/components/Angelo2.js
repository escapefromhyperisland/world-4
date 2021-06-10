import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../../src/angelo2.css';

const imagesDates = [
  {
    id: '1889',
    name: '1889'
  },
  {
    id: '1960',
    name: '1960'
  },
  {
    id: '1173',
    name: '1173'
  },
  {
    id: '1958',
    name: '1958'
  },
  {
    id: '1891',
    name: '1891'
  },
  {
    id: '1220',
    name: '1220'
  }
];

const imageFacts = [
  {
    id: 'europe',
    name: 'europe',
    facts: 'europe'
  },
  {
    id: 'pisa',
    name: 'pisa',
    facts: 'pisa'
  },
  {
    id: 'pizza',
    name: 'pizza',
    facts: 'pizza'
  }
];

export const Angelo2 = () => {
  const [dates, updateDates] = useState(imagesDates);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(dates);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateDates(items);
  }
  console.log(dates);

  const showMessage = () => {
    return dates.filter(
      ({ id }, index) =>
        (id === '1958' && index === 0) ||
        (id === '1173' && index === 1) ||
        (id === '1889' && index === 2)
    ).length === 3
      ? alert('Bravissimo!')
      : null;
  };

  showMessage();

  return (
    <div className="wraper">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="dates">
          {provided => (
            <ul
              className="dates-facts"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dates.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {provided => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="data-images">
                          <img src={`/imgAngelo2/${id}.png`} alt={`${name}`} />
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <ul className="dates-facts">
        {imageFacts.map(({ facts, name }) => {
          return (
            <li key={facts}>
              <div className="data-images">
                <img src={`/imgFacts/${facts}.jpeg`} alt={`${facts}`} />
              </div>
            </li>
          );
        })}
      </ul>
      <ul>
        <div className="message">
          <h3>
            Angelo gets confused in his dream, trying to remember important
            dates from Italy. Help him to organize them!
          </h3>
        </div>
      </ul>
    </div>
  );
};
