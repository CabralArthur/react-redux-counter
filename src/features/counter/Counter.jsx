import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

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
            <div style={{ marginTop: '1rem' }}>
                <button onClick={() => dispatch(reset())}> Reset </button>
            </div>
        </div>
    )
}

export default Counter;
