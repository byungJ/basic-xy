import React, { useReducer, useState } from 'react';
import { useImmer } from 'use-immer';
import personReducer from './reducer/person-reducer';

export default function AppMentos() {

    const [person, updatePerson] = useImmer(initialPerson);
    //const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        updatePerson(person => {
            const mentor = person.mentors.find(m => m. name === prev);
            mentor.name = current;
        });
        
        // setPerson((person) => ({
        //     ...person, mentors : person.mentors.map(
        //         (mentor) =>
        //             {
        //                 if (mentor.name === prev) {
        //                     return { ...mentor, name: current }
        //                 }
        //                 return mentor;
        //             }
        //     )
        // }));

        // dispatch({type: 'update', prev, current})
    };

    const handleAdd = () => {
        const name = prompt(`새로운 멘토의 name을 입력`);
        const title = prompt(`새로운 멘토의 title을 입력`);

        updatePerson((person) => 
            { person.mentors.push({ name, title })});

        // setPerson((person) => 
        //         {
        //             return ({ ...person, mentors : [...person.mentors, { name, title }]});
        //         }
        //     );
        
        //dispatch({type: 'added', name, title})

    };

    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);

        updatePerson(person => {
            const index = person.mentors.findIndex(m => m.name === name);
            person.mentors.splice(index, 1);
        })

        //dispatch({type: 'deleted', name})
        
        // setPerson((person) => ({
        //     ...person, mentors : person.mentors.filter(
        //         (mentor) => mentor.name !== name
        //     )
        // }));

    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p> {person.name}의 멘토는: </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>

            <button onClick={handleAdd}>멘토 추가하기</button>

            <button onClick={handleDelete}>멘토 삭제하기</button>
        </div>
    );
}

const initialPerson = {
    name: 'eggpotato',
    title: '개발자',
    mentors: [
        {
            name: '보굥',
            title: "말썽쟁이 여자친구"
        },
        {
            name: '웅이',
            title: "말썽쟁이 고냥이"
        }
    ]
}