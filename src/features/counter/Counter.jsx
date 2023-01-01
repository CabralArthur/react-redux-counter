import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{ count }</p>
            <div>
                <button onClick={() => dispatch(decrement())} style={{ marginRight: '1rem' }}> - </button>
                <button onClick={() => dispatch(increment())}> + </button>
            </div>
        </div>
    )
}

export default Counter;