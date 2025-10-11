import { useGetData } from '../../hooks';
import { Items } from '.';

export const Education = ({ id }) => {
    const { data: education } = useGetData('education');

    return (
        <div id={id} className='education-container section-container'>
            <h4 className='label'>Education</h4>
            {education?.length && <Items items={education} hasMore={false} />}
        </div>
    )
}
