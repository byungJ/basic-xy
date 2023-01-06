import React, { useState } from 'react';

export default function AppMentor() {

    const [person, setPerson] = useState(
        {
            name: 'eggpotato',
            title: '개발자',
            mentor: {
                name: '보굥',
                title: "말썽쟁이 여자친구"
            }
        }
    )

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button onClick={() => {
                const name = prompt(`멘토 이름 바꾸기`)
                setPerson((prev) => {
                    return ({...prev, mentor: {name: name, title: prev.mentor.title}})
                });
            }}>멘토 이름 바꾸기</button>
            <button onClick={() => {
                const title = prompt(`멘토 타이틀 바꾸기`)
                setPerson((prev) => {
                    return ({ ...prev, mentor: {...prev.mentor, title}})
                });
            }}>멘토 타이틀 바꾸기</button>
        </div>
    );
}

