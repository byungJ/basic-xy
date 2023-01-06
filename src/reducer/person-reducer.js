export default function personReducer(person, action) {
    switch(action.type) {
        case 'update': {

            //const prev = action.prev;
            //const current = action.current; 밑에 코드 하나로 축약
            const { prev, current } = action;

            return {
                ...person, mentors : person.mentors.map(
                    (mentor) =>
                        {
                            if (mentor.name === prev) {
                                return { ...mentor, name: current }
                            }
                            return mentor;
                        })
                    };
        }
        case 'added': {
            const { name, title } = action;

            return {
                ...person,
                    mentors : [...person.mentors, { name, title }],
            };
        }
        case 'deleted': {
            const { name, title } = action;

            return {
                ...person, mentors : person.mentors.filter(
                    (mentor) => mentor.name !== action.name
                )
            }
        }
        default: {
            throw Error(`알수 없는 액션 타입입니다: ${action.type}`)
        }
    }
}